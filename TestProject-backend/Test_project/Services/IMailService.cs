using Test_project.Models;

namespace Test_project.Services
{
    public interface IMailService
    {
        Task<MailDetails> SendMail(MailRequest mail);
    }
}
