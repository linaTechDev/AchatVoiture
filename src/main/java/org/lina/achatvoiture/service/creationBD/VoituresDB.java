package org.lina.achatvoiture.service.creationBD;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.lina.achatvoiture.dto.VoitureDto;
import org.lina.achatvoiture.service.MarqueService;
import org.lina.achatvoiture.service.VoitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import java.io.FileReader;
import java.io.IOException;
import java.util.*;

@Service
public class VoituresDB implements CommandLineRunner {
    @Autowired
    private VoitureService voitureService;
    @Autowired
    private MarqueService marqueService;

    private final Random r = new Random();

    @Override
    public void run(String... args) throws IOException, ParseException {
        System.out.println("Création...");
        readJSON();
        marqueService.saveMarques();
        System.out.println("Création fin");
    }

    public void AddPonderation(Dictionary<String, Double> dict, String marque) {
        double ponderationMin = 5000;// 50%
        double ponderationMax = 10000;// 100%

        double randomPonderation = ponderationMin + ((ponderationMax - ponderationMin) * r.nextDouble());

        dict.put(marque, randomPonderation);
    }

    public void readJSON() throws IOException, ParseException {
        int id = 0;
        JSONParser parser = new JSONParser();

        JSONArray carsImage = (JSONArray) parser.parse(new FileReader("src/main/java/org/lina/achatvoiture/service/creationBD/carsImage.json"));
        ArrayList<VoitureDto> voitureDtosCarsImage = new ArrayList<>();


        double rangeMin = 100000;
        double rangeMax = 200000;

        Dictionary<String, Double> dict= new Hashtable<>();

        AddPonderation(dict, "Audi");
        AddPonderation(dict, "Bentley");
        AddPonderation(dict, "BMW");
        AddPonderation(dict, "Buick");
        AddPonderation(dict, "Cadillac");
        AddPonderation(dict, "Chevrolet");
        AddPonderation(dict, "Chrysler");
        AddPonderation(dict, "Daewoo");
        AddPonderation(dict, "Dodge");
        AddPonderation(dict, "Eagle");
        AddPonderation(dict, "Ford");
        AddPonderation(dict, "Geo");
        AddPonderation(dict, "Hyundai");
        AddPonderation(dict, "Infiniti");
        AddPonderation(dict, "Jaguar");
        AddPonderation(dict, "Kia");
        AddPonderation(dict, "Lincoln");
        AddPonderation(dict, "Mazda");
        AddPonderation(dict, "Mercury");
        AddPonderation(dict, "Mitsubishi");
        AddPonderation(dict, "Nissan");
        AddPonderation(dict, "Oldsmobile");
        AddPonderation(dict, "Plymouth");
        AddPonderation(dict, "Pontiac");
        AddPonderation(dict, "Porsche");
        AddPonderation(dict, "Saab");
        AddPonderation(dict, "Saturn");
        AddPonderation(dict, "Scion");
        AddPonderation(dict, "Toyota");
        AddPonderation(dict, "Volkswagen");
        AddPonderation(dict, "Volvo");

        for (Object o : carsImage) {
            id++;
            JSONObject car = (JSONObject) o;
            String imageVoiture = (String) car.get("imageVoiture");

            String marqueModel = (String) car.get("marque");
            String marque = marqueModel.substring(0, marqueModel.indexOf(' '));
            String model = marqueModel.substring(marqueModel.indexOf(' ') + 1);

            int annee = 0;
            if(car.get("annee") != null) {
                annee = Integer.parseInt(String.valueOf(car.get("annee")));
            }

            String detail = (String) car.get("model");
            if (detail == null) {
                detail = "";
            }

            voitureDtosCarsImage.add(new VoitureDto(
                    id,
                    marque,
                    model,
                    detail,
                    annee,
                    0,
                    0,
                    "",
                    0,
                    "",
                    "",
                    "",
                    "",
                    imageVoiture,
                    false
            ));
        }

        JSONArray carsDetail = (JSONArray) parser.parse(new FileReader("src/main/java/org/lina/achatvoiture/service/creationBD/carsDetail.json"));

        for (Object o : carsDetail) {
            JSONObject car = (JSONObject) o;

            String marque = (String) car.get("make");
            String model = (String) car.get("model");
            String annee = (String) car.get("year");

            String rouesMotrice = (String) car.get("drive");
            if (rouesMotrice == null) {
                rouesMotrice = "";
            }

            int nbrCylindre = 0;
            if(car.get("cylinders") != null) {
                nbrCylindre = Integer.parseInt(String.valueOf(car.get("cylinders")));
            }

            String categorieTailleVoiture = (String) car.get("vclass");

            String transmissionNbrVitesse;
            String transmission = "";
            String nbrVitesseTransmission = "";

            if(car.get("trany") != null) {
                transmissionNbrVitesse = (String) car.get("trany");

                transmission = transmissionNbrVitesse.substring(0, transmissionNbrVitesse.indexOf(' '));
                if (Objects.equals(transmission, "Manual")) {
                    transmission = "manuel";
                } else if (Objects.equals(transmission, "Automatic")) {
                    transmission = "automatique";
                } else {
                    transmission = "inconnu";
                }

                nbrVitesseTransmission = transmissionNbrVitesse.substring(transmissionNbrVitesse.indexOf(' ') + 1);
            }

            String carburant = (String) car.get("fueltype");
            if (Objects.equals(carburant, "Regular")) {
                carburant = "essenceRegulier";
            } else if (Objects.equals(carburant, "Midgrade")) {
                carburant = "essenceMoyen";
            } else if (Objects.equals(carburant, "Premium")) {
                carburant = "essencePremium";
            } else if (Objects.equals(carburant, "Gasoline or E85")) {
                carburant = "E85";
            } else if (Objects.equals(carburant, "CNG")) {
                carburant = "CNG";
            } else if (Objects.equals(carburant, "Diesel")) {
                carburant = "diesel";
            } else if (Objects.equals(carburant, "Electricity")) {
                carburant = "electrique";
            } else if (Objects.equals(carburant, "Regular Gas or Electricity") ||
                        Objects.equals(carburant, "Premium Gas or Electricity")) {
                carburant = "hybride";
            } else {
                carburant = "inconnu";
            }

            double kilometrage;
            if(Objects.equals(carburant, "Electricity")) {
                kilometrage = (Long) car.get("range") * 1.6093;
            }
            else {
                kilometrage = 282.48 / (Long) car.get("highway08");
            }
            kilometrage = (double) Math.round(kilometrage * 100) /100;

            boolean found = false;
            for (VoitureDto voitureDto : voitureDtosCarsImage) {
                if (voitureDto.getMarque().equals(marque) &&
                        voitureDto.getModel().equals(model) &&
                        voitureDto.getAnnee() == Integer.parseInt(annee)) {
                    found = true;
                } else if (voitureDto.getMarque().equals(marque) &&
                        voitureDto.getModel().equals(model)) {
                    found = true;
                }
                if (found) {
                    if (voitureDto.getKilometrage() == 0) {
                        voitureDto.setKilometrage(kilometrage);
                        voitureDto.setRouesMotrice(rouesMotrice);
                        voitureDto.setNbrCylindre(nbrCylindre);
                        voitureDto.setCategorieTailleVoiture(categorieTailleVoiture);
                        voitureDto.setCarburant(carburant);
                        voitureDto.setTransmission(transmission);
                        voitureDto.setNbrVitesseTransmission(nbrVitesseTransmission);

                        if (dict.get(marque) == null) {
                            AddPonderation(dict, marque);
                        }
                        Double ponderation = dict.get(marque);
                        double randomPrix = (rangeMin + ((rangeMax - rangeMin) * r.nextDouble())) * (ponderation / 100.0);

                        voitureDto.setPrix(Math.round(randomPrix));

                        voitureService.saveVoiture(voitureDto);
                    }
                    break;
                }
            }
        }
    }
}
