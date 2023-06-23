using Test_project.Models;

namespace Test_project.Services
{
    public class MailService : IMailService
    {
        public Task<MailDetails> SendMail(MailRequest mail) 
        {
            var mailDetails = new MailDetails { Date = DateTime.Now, Mail = mail.Mail };
            return Task.FromResult(mailDetails); 
        }
    }
}
