using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ThaniyasApp.Models.common;

namespace ThaniyasApp.Models.Login
{
    public class Login
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class LoginResults
    {
        public Status status { get; set; }
        public UserViewModel userDetail { get; set; }
    }

    public class UserViewModel
    {
        public int ID { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int RoleID { get; set; }
        public string JoinedDate { get; set; }
        public bool IsFirstTimeLogin { get; set; }
        public bool AcceptedTermsAndConditions { get; set; }      
        public bool Deleted { get; set; }
    }
}
