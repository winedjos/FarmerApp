using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThaniyasApp.Models
{
    public class ClientAppSettings
    {
        public ApiAppConfig ApiAppConfig { get; set; }
        public string ApiUrl { get; set; }
        public int SessionTimeOut { get; set; }
        public string LocalUrl { get; set; }
    }

    public class ApiAppConfig
    {
        public string Url { get; set; }
        public string KeyId { get; set; }
        public string KeyValue { get; set; }
    }
}
