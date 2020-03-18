using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Threading.Tasks;
using ThaniyasApp.Helper;
using ThaniyasApp.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using ThaniyasApp.Models.Login;
using ThaniyasApp.Models.common;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ThaniyasApp.Controllers
{
    public class LoginController : Controller
    {

        //private IAccountService accountService;// = Activator.CreateInstance<AccountService>();

        //private LoginController(IAccountService _accountService)
        //{
        //    accountService = _accountService;
        //}
        public string apiUrl = string.Empty;
        public string localUrl = string.Empty;
        //#region GetUserbyLogin
        [HttpPost]
        public async Task<JsonResult> GetUserbyLogin([FromBody]Login input)
        {
            apiUrl = Config.ApiUrl  + "http://localhost:56492/api/Login";
            localUrl = Config.LocalUrl + "https://localhost:44346/api/Login";

            Object returnResults = new object();
            object LocalreturnResults = new object();
            try
            {
                if (Config.debugMode && input.UserName == "admin" && input.Password == "admin")
                {
                    var results = new LoginResults { status = new Status(), userDetail = new UserViewModel() };
                    results.status = new Status { StatusValue = true, StatusCode = 200, StatusDisplay = "Logged in" };
                    results.userDetail = new UserViewModel
                    {
                        UserName = input.UserName,
                        ID = 99999,
                        RoleID = 1,
                        AcceptedTermsAndConditions = true,
                        IsFirstTimeLogin = false
                    };
                    returnResults = results;
                    await SigninWeb(input, results.userDetail);
                }
                else
                {
                    var stringContent = new StringContent(Newtonsoft.Json.JsonConvert.SerializeObject(input), System.Text.Encoding.UTF8, "application/json");
                    using (HttpCustomGetClientConnect client = new HttpCustomGetClientConnect(apiUrl, localUrl))
                    {
                        HttpResponseMessage response = await client.PostAsync(apiUrl, stringContent);
                        HttpResponseMessage Localresponse = await client.PostAsync(localUrl, stringContent);
                        if (response.IsSuccessStatusCode && Localresponse.IsSuccessStatusCode)
                        {
                            var data = await response.Content.ReadAsStringAsync();
                            var Localdata = await Localresponse.Content.ReadAsStringAsync();
                            var result = Newtonsoft.Json.JsonConvert.DeserializeObject<LoginResults>(data);
                            var Localresult = Newtonsoft.Json.JsonConvert.DeserializeObject<LoginResults>(Localdata);
                            returnResults = Newtonsoft.Json.JsonConvert.DeserializeObject<LoginResults>(data);
                            LocalreturnResults = Newtonsoft.Json.JsonConvert.DeserializeObject<LoginResults>(Localdata);
                            await SigninWeb(input, result.userDetail);
                            await SigninWeb(input, Localresult.userDetail);
                        }
                        else
                        {
                            returnResults = null;
                            LocalreturnResults = null;
                        }
                    }
                }
            }
            catch (Exception _ex)
            {
                Debug.Print(_ex.Message);
            }
            return new JsonResult(new { result = returnResults, Localresult = LocalreturnResults, sessionTimeout = Config.SessionTimeout });
        }

        public async Task Signout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        public async Task SigninWeb(Login result, UserViewModel resultobj)
        {
            try
            {
                if (result != null)
                {
                    //TODO: we have to change "resultobj.rolename" instead of "Admin" for role, waiting for full data information
                    var claims = new[] { new Claim("name", result.UserName), new Claim(ClaimTypes.Role, "Admin") };

                    var claimsIdentity = new ClaimsIdentity(
                        claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    var authProperties = new Microsoft.AspNetCore.Authentication.AuthenticationProperties
                    {

                        ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(Config.SessionTimeout),
                        IsPersistent = true,
                        RedirectUri = "/"
                    };

                    await HttpContext.SignInAsync(
                        CookieAuthenticationDefaults.AuthenticationScheme,
                        new ClaimsPrincipal(claimsIdentity),
                        authProperties);
                    //TODO: we have to change "resultobj" instead of "result" for logged user information, waiting for full data information
                    HttpContext.Session.Set("UserDetails", resultobj);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
