﻿using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net.Mail;
using System.Net;

namespace BookStore.Services
{
    public class EmailSender:IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            var fromEmail = "";
            var fromPassword = @"";

            MailMessage message = new();
            message.From = new MailAddress(fromEmail);
            message.To.Add(new MailAddress(email));
            message.Subject = subject;
            message.Body = htmlMessage;
            message.IsBodyHtml = true;

            var smtpClient = new SmtpClient("smtp.gmail.com")
            {
                Port = 587,
                Credentials = new NetworkCredential(fromEmail, fromPassword),
                EnableSsl = true
            };

            smtpClient.Send(message);
        }
    }
}
