using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using System.ComponentModel.DataAnnotations;
using Test_project.Models;
using Test_project.Services;

namespace Test_project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MailController : ControllerBase
    {

        private readonly ILogger<MailController> _logger;
        private readonly IMailService _mailService;

        public MailController(ILogger<MailController> logger, IMailService mailService)
        {
            _logger = logger;
            _mailService = mailService;
        }

        [Route("SendEmail")]
        [HttpPost]
        public async Task<ActionResult<MailDetails>> SendEmail([FromBody][Required] MailRequest mail)
        {
            var result = await _mailService.SendMail(mail);

            return new OkObjectResult(result);
        }
    }
}