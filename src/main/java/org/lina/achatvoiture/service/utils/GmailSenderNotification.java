package org.lina.achatvoiture.service.utils;

import jakarta.transaction.Transactional;
import org.lina.achatvoiture.model.VoitureVendu;
import org.springframework.stereotype.Service;

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

@Service
public class GmailSenderNotification {

    @Transactional
    public void sendEmail(String emailTo, VoitureVendu pannier) {
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
            String htmlBody = "<!DOCTYPE html>" +
                    "<html lang=\"en\">" +
                    "<head>" +
                    "<meta charset=\"UTF-8\">" +
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                    "<title>Notification Email</title>" +
                    "</head>" +
                    "<body>" +
                    "<h2>LUXEDRIVE : Reçu d'achat de voiture</h2>" +
                    "<p><strong>Destinataire:</strong> " + pannier.getFirstName() + " " + pannier.getLastName() + "</p>" +
                    "<p><strong>Voiture:</strong></p>" +
                    "<ul>" +
                    "<li><strong>Marque / Modèle:</strong> " + pannier.getVoiture().getMarque() + " " + pannier.getVoiture().getModel() + "</li>" +
                    "<li><strong>Détail:</strong> " + pannier.getVoiture().getDetail() + "</li>" +
                    "<li><strong>Année:</strong> " + pannier.getVoiture().getAnnee() + "</li>" +
                    "<li><strong>Kilométrage:</strong> " + pannier.getVoiture().getKilometrage() + "</li>" +
                    "<li><strong>Roues motrices:</strong> " + pannier.getVoiture().getRouesMotrice() + "</li>" +
                    "<li><strong>Nombre de cylindres:</strong> " + pannier.getVoiture().getNbrCylindre() + "</li>" +
                    "<li><strong>Catégorie / Taille:</strong> " + pannier.getVoiture().getCategorieTailleVoiture() + "</li>" +
                    "<li><strong>Carburant:</strong> " + pannier.getVoiture().getCarburant() + "</li>" +
                    "<li><strong>Transmission:</strong> " + pannier.getVoiture().getTransmission() + "</li>" +
                    "<li><strong>Nombre de vitesses:</strong> " + pannier.getVoiture().getNbrVitesseTransmission() + "</li>" +
                    "<li><strong>Prix:</strong> " + pannier.getVoiture().getPrix() + " $</li>" +
                    "</ul>" +
                    "<img src=\"" + pannier.getVoiture().getImageVoiture() + "\" alt=\"Image de voiture\">" +
                    "</body>" +
                    "</html>";

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(emailTo));
            message.setSubject("LUXEDRIVE : Reçu d'achat de voiture");
            message.setContent(htmlBody, "text/html; charset=utf-8");

            Transport.send(message);

            System.out.println("Email sent successfully.");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}