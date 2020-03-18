using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ThaniyasApp.Models.common
{
    public class Status
    {
        public int StatusCode { set; get; }
        public bool StatusValue { set; get; }
        public string StatusDisplay { set; get; }
    }

    public class StatusResponse
    {
        public Status Status { get; set; }
    }

}
