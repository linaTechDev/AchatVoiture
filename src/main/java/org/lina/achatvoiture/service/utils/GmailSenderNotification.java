package org.lina.achatvoiture.service.utils;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class GmailSenderNotification {
    public static void main(String[] args) {
        final String username = "botvoiture@gmail.com";
        final String password = "fpxl irbp uhta ajna";

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(username, password);
                    }
                });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse("lina.ly.2018@outlook.fr"));
            message.setSubject("Subject");
            message.setText("Body");

            Transport.send(message);

            System.out.println("Email sent successfully.");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}