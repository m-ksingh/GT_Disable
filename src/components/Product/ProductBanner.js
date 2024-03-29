import React, { useState, useEffect, useContext, memo } from 'react'
import Spinner from "rct-tpt-spnr";
import Carousel from 'react-bootstrap/Carousel';
import ApiService from "../../services/api.service";
import _ from 'lodash';
import { useHistory, Link } from 'react-router-dom';
import { useAuthState } from '../../contexts/AuthContext';
import { AppContext } from '../../contexts/AppContext';
import useToast from '../../commons/ToastHook';

const ProductBanner = () => {
    const userDetails = useAuthState();
    const { location } = useContext(AppContext);
    const history = useHistory();
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const Toast = useToast();
    const spinner = useContext(Spinner);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const hardCodeData = [
        {
            "sid": "986612A729F04750854ECF92531E229CB067066E671349949A31E3EBA8C09565",
            "latitude": "42.3600825",
            "longitude": "-71.0588801",
            "title": "Black Ops",
            "description": "Black Ops",
            "trade": false,
            "sell": true,
            "auction": false,
            "estimatedPrice": 799.0,
            "sellPrice": 799.0,
            "auctionReservePrice": null,
            "auctionExpireOn": null,
            "tradeReservePrice": null,
            "tradeExpiresOn": null,
            "tradeWithListingType": null,
            "deliveryType": "BOTH",
            "availableOtherLocation": true,
            "consentProvided": true,
            "listingType": "INDIVIDUAL",
            "postedOn": "2023-04-07T07:57:28.000+0000",
            "updatedOn": "2023-04-07T07:57:28.000+0000",
            "listingDetailsStatus": "ACTIVE",
            "thLocation": null,
            "categorySid": "A3563F0A815B41E3ADA883D6D6B60E82925C54704B4A4AD7A3C8DB4076013F60",
            "manufacturerSid": "BE7A77465AAC496CAF075F41387085CE1BC8E4DCAB904976A45CC4BCD8EFC4F5",
            "modelSid": "B96BAA2B4924432488DDA9734923D212E62A3692BE2648058EFF0B65E8C03D77",
            "caliberSid": "DF00EC13A4B6C9B32C1C5D83DB302E5E00000000000000000000000000000000",
            "barrelLengthSid": "ADF1FF5F7E8BF0ADE1B0F0679AEE2C6300000000000000000000000000000000",
            "capacitySid": "AD0D4FE1AE3B457FA1D0F513C68625216E2FE236DA7648E5B14B3BC5E44AF31F",
            "frameFinishSid": "005E27F9DA1054D8CF364DA8D6FE3BAA00000000000000000000000000000000",
            "gripsSid": "9B392E7F36AA4AE1BA7F4A608C72473B83FCD1984E8A4D39892ED676B75B46B5",
            "currencySid": "8BF00242C993A4CD5EEE5987DBCB256706FB2BD7D78152E20DA3B6068FAD5735",
            "listingDetailsContent": "[{\"order\": 0, \"fileName\": \"https://gtraderz-upload.s3.amazonaws.com/1680854226866-434998486_627592754.jpg\", \"mediaType\": \"images\"}]",
            "rating": false,
            "distance": "0.23795074664471938",
            "fflStoreSid": null,
            "postedBy": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "pre1968": false,
            "serialNumber": null,
            "modelName": "Marlin Model 60",
            "manufacturerName": "M&M Pvt ltd.",
            "caliberName": "Rifle's",
            "barrelLengthName": "16 inch",
            "capacityName": "Standard Capacity Magazines",
            "frameFinishName": "Black oxide",
            "gripsName": "Rifle",
            "categoryName": "Semi Auto Rifles",
            "totalEstimatedPrice": null,
            "platformVariables": "{\"returnPeriod\": \"10\", \"restockingFees\": {\"amount\": \"10\", \"percentage\": \"10\"}}",
            "listingPreferredDistance": "50",
            "fixedShippingFees": null,
            "quantity": 1,
            "itemType": "PRE_1968",
            "fflStoreName": null,
            "fflPremiseCity": null,
            "fflPremiseStreet": null,
            "fflPremiseZipCode": null,
            "fflPremiseState": null,
            "fflPhoneNumber": null,
            "sheriffOfficeLocation": "{\"poi\": {\"name\": \"Comm of Mass Joann Gora\"}, \"dist\": 0.13997300410036792, \"name\": \"Comm of Mass Joann Gora, 8 Myrtle Street, Boston, MA 02114\", \"address\": {\"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"Myrtle Street\", \"countryCode\": \"US\", \"municipality\": \"Boston\", \"streetNumber\": \"8\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"8 Myrtle Street, Boston, MA 02114\", \"countrySubdivisionName\": \"Massachusetts\"}}",
            "anyOtherLocations": "{\"url\": \"https://maps.google.com/?q=Boston,+MA,+USA&ftid=0x89e3652d0d3d311b:0x787cbf240162e8a0\", \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png\", \"name\": \"Boston\", \"types\": [\"locality\", \"political\"], \"photos\": [{\"width\": 4032, \"height\": 2268, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/111384779248250082343\\\">The Chicken Parm Guy</a>\"]}, {\"width\": 3024, \"height\": 4032, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105364850726965652918\\\">biotifun zaza (biotifunzaza)</a>\"]}, {\"width\": 1200, \"height\": 675, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}, {\"width\": 4320, \"height\": 3240, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/117851538676337143368\\\">곽준근</a>\"]}, {\"width\": 393, \"height\": 600, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/113031672060836622421\\\">Sergio Luis Garcia</a>\"]}, {\"width\": 4096, \"height\": 3072, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/103700589738958165786\\\">Kettering</a>\"]}, {\"width\": 960, \"height\": 432, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105984507955832557811\\\">Aziz Modak</a>\"]}, {\"width\": 4032, \"height\": 3024, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/107775811396158620011\\\">Xabier Lizartzategi</a>\"]}, {\"width\": 3898, \"height\": 1979, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/116063579870013643319\\\">Chico Khan</a>\"]}, {\"width\": 1200, \"height\": 900, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}], \"website\": \"http://www.cityofboston.gov/\", \"geometry\": {\"location\": {\"lat\": 42.3600825, \"lng\": -71.0588801}, \"viewport\": {\"east\": -70.74945501944023, \"west\": -71.19111298647394, \"north\": 42.4008198878762, \"south\": 42.22788002056647}}, \"place_id\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"vicinity\": \"Boston\", \"reference\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"utc_offset\": -240, \"adr_address\": \"<span class=\\\"locality\\\">Boston</span>, <span class=\\\"region\\\">MA</span>, <span class=\\\"country-name\\\">USA</span>\", \"formatted_address\": \"Boston, MA, USA\", \"html_attributions\": [], \"address_components\": [{\"types\": [\"locality\", \"political\"], \"long_name\": \"Boston\", \"short_name\": \"Boston\"}, {\"types\": [\"administrative_area_level_2\", \"political\"], \"long_name\": \"Suffolk County\", \"short_name\": \"Suffolk County\"}, {\"types\": [\"administrative_area_level_1\", \"political\"], \"long_name\": \"Massachusetts\", \"short_name\": \"MA\"}, {\"types\": [\"country\", \"political\"], \"long_name\": \"United States\", \"short_name\": \"US\"}], \"icon_mask_base_uri\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet\", \"utc_offset_minutes\": -240, \"icon_background_color\": \"#7B9EB0\"}",
            "appUsersSid": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "secondaryListings": null,
            "fflStoreLocation": "{\"sid\": null, \"licDist\": \"04\", \"licRegn\": \"6\", \"licSeqn\": \"14630\", \"licType\": \"07\", \"licExpDt\": \"3L\", \"mailCity\": \"AGAWAM\", \"premCity\": \"AGAWAM\", \"licCounty\": \"013\", \"mailState\": \"MA\", \"premState\": \"MA\", \"storeName\": \"OPC\", \"mailStreet\": \"104 RAMAH CIRCLE SOUTH\", \"premStreet\": \"104 RAMAH CIRCLE SOUTH\", \"voicePhone\": \"4132731865\", \"mailZipCode\": \"01001\", \"premZipCode\": \"01001\", \"allowToEnter\": false, \"licHolderName\": \"OPTIMUM PARTS COMPANY, INC\"}",
            "trade_with_listing_type": null,
            "listingLocation": "{\"street\": \"City Hall Square\", \"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"City Hall Square\", \"boundingBox\": {\"entity\": \"position\", \"northEast\": {\"lat\": 42.360269, \"lng\": -71.058601}, \"southWest\": {\"lat\": 42.360092, \"lng\": -71.05865}}, \"countryCode\": \"US\", \"municipality\": \"Boston\", \"routeNumbers\": [], \"streetNumber\": \"1\", \"buildingNumber\": \"1\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"1 City Hall Square, Boston, MA 02114\", \"countrySubdivision\": \"MA\", \"extendedPostalCode\": \"02114-1835\", \"streetNameAndNumber\": \"1 City Hall Square\", \"countrySubdivisionName\": \"Massachusetts\", \"municipalitySubdivision\": \"Downtown Boston\", \"countrySecondarySubdivision\": \"Suffolk\"}",
            "primary": false,
            "returnable": false,
            "shipBeyondPreferredDistance": false,
            "shippingFeesLocationBased": true,
            "shippingFree": false,
            "tconditionSid": "11CD3651BACF1593E64C8A85C70E01719D271EFCFDC5FAF853EB41653014CA2F",
            "offeredATrade": false,
            "fflStoreEnabled": true,
            "sheriffOfficeEnabled": true,
            "bundled": false,
            "tconditionName": "New"
        },
        {
            "sid": "3304EA25C3EC47BF91458FD5DCC4485ACF8152E16BFD4D92A9E0BD409CE011BC",
            "latitude": "42.3600825",
            "longitude": "-71.0588801",
            "title": "RUGER AMERICAN PISTOL AMERICAN RUGER PISTOL",
            "description": "RUGER AMERICAN PISTOL AMERICAN RUGER PISTOL",
            "trade": false,
            "sell": true,
            "auction": false,
            "estimatedPrice": 500.0,
            "sellPrice": 500.0,
            "auctionReservePrice": null,
            "auctionExpireOn": null,
            "tradeReservePrice": null,
            "tradeExpiresOn": null,
            "tradeWithListingType": null,
            "deliveryType": "BOTH",
            "availableOtherLocation": true,
            "consentProvided": true,
            "listingType": "INDIVIDUAL",
            "postedOn": "2023-04-07T06:33:35.000+0000",
            "updatedOn": "2023-04-07T06:33:35.000+0000",
            "listingDetailsStatus": "ACTIVE",
            "thLocation": null,
            "categorySid": "2C0B7FFA45004392BBA5884CEC1660CEE26D5B6B132D49F983105953F5DB7DC9",
            "manufacturerSid": "3C84B8B499C1F9346BC79CD56B88B04D00000000000000000000000000000000",
            "modelSid": null,
            "caliberSid": null,
            "barrelLengthSid": null,
            "capacitySid": null,
            "frameFinishSid": null,
            "gripsSid": null,
            "currencySid": "8BF00242C993A4CD5EEE5987DBCB256706FB2BD7D78152E20DA3B6068FAD5735",
            "listingDetailsContent": "[{\"order\": 0, \"fileName\": \"https://gtraderz-upload.s3.amazonaws.com/1680849194460-pistol1.jpg\", \"mediaType\": \"images\"}]",
            "rating": false,
            "distance": "0.23795074664471938",
            "fflStoreSid": null,
            "postedBy": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "pre1968": false,
            "serialNumber": null,
            "modelName": null,
            "manufacturerName": "Austal Limited",
            "caliberName": null,
            "barrelLengthName": null,
            "capacityName": null,
            "frameFinishName": null,
            "gripsName": null,
            "categoryName": "Pistol",
            "totalEstimatedPrice": null,
            "platformVariables": "{\"returnPeriod\": \"10\", \"restockingFees\": {\"amount\": \"10\", \"percentage\": \"10\"}}",
            "listingPreferredDistance": "50",
            "fixedShippingFees": null,
            "quantity": 1,
            "itemType": "PRE_1968",
            "fflStoreName": null,
            "fflPremiseCity": null,
            "fflPremiseStreet": null,
            "fflPremiseZipCode": null,
            "fflPremiseState": null,
            "fflPhoneNumber": null,
            "sheriffOfficeLocation": "{\"poi\": {\"name\": \"Comm of Mass Joann Gora\"}, \"dist\": 0.13997300410036792, \"name\": \"Comm of Mass Joann Gora, 8 Myrtle Street, Boston, MA 02114\", \"address\": {\"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"Myrtle Street\", \"countryCode\": \"US\", \"municipality\": \"Boston\", \"streetNumber\": \"8\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"8 Myrtle Street, Boston, MA 02114\", \"countrySubdivisionName\": \"Massachusetts\"}}",
            "anyOtherLocations": "{\"url\": \"https://maps.google.com/?q=Boston,+MA,+USA&ftid=0x89e3652d0d3d311b:0x787cbf240162e8a0\", \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png\", \"name\": \"Boston\", \"types\": [\"locality\", \"political\"], \"photos\": [{\"width\": 4032, \"height\": 2268, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/111384779248250082343\\\">The Chicken Parm Guy</a>\"]}, {\"width\": 3024, \"height\": 4032, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105364850726965652918\\\">biotifun zaza (biotifunzaza)</a>\"]}, {\"width\": 1200, \"height\": 675, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}, {\"width\": 4320, \"height\": 3240, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/117851538676337143368\\\">곽준근</a>\"]}, {\"width\": 393, \"height\": 600, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/113031672060836622421\\\">Sergio Luis Garcia</a>\"]}, {\"width\": 4096, \"height\": 3072, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/103700589738958165786\\\">Kettering</a>\"]}, {\"width\": 960, \"height\": 432, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105984507955832557811\\\">Aziz Modak</a>\"]}, {\"width\": 4032, \"height\": 3024, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/107775811396158620011\\\">Xabier Lizartzategi</a>\"]}, {\"width\": 3898, \"height\": 1979, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/116063579870013643319\\\">Chico Khan</a>\"]}, {\"width\": 1200, \"height\": 900, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}], \"website\": \"http://www.cityofboston.gov/\", \"geometry\": {\"location\": {\"lat\": 42.3600825, \"lng\": -71.0588801}, \"viewport\": {\"east\": -70.74945501944023, \"west\": -71.19111298647394, \"north\": 42.4008198878762, \"south\": 42.22788002056647}}, \"place_id\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"vicinity\": \"Boston\", \"reference\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"utc_offset\": -240, \"adr_address\": \"<span class=\\\"locality\\\">Boston</span>, <span class=\\\"region\\\">MA</span>, <span class=\\\"country-name\\\">USA</span>\", \"formatted_address\": \"Boston, MA, USA\", \"html_attributions\": [], \"address_components\": [{\"types\": [\"locality\", \"political\"], \"long_name\": \"Boston\", \"short_name\": \"Boston\"}, {\"types\": [\"administrative_area_level_2\", \"political\"], \"long_name\": \"Suffolk County\", \"short_name\": \"Suffolk County\"}, {\"types\": [\"administrative_area_level_1\", \"political\"], \"long_name\": \"Massachusetts\", \"short_name\": \"MA\"}, {\"types\": [\"country\", \"political\"], \"long_name\": \"United States\", \"short_name\": \"US\"}], \"icon_mask_base_uri\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet\", \"utc_offset_minutes\": -240, \"icon_background_color\": \"#7B9EB0\"}",
            "appUsersSid": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "secondaryListings": null,
            "fflStoreLocation": "{\"sid\": null, \"licDist\": \"04\", \"licRegn\": \"6\", \"licSeqn\": \"14630\", \"licType\": \"07\", \"licExpDt\": \"3L\", \"mailCity\": \"AGAWAM\", \"premCity\": \"AGAWAM\", \"licCounty\": \"013\", \"mailState\": \"MA\", \"premState\": \"MA\", \"storeName\": \"OPC\", \"mailStreet\": \"104 RAMAH CIRCLE SOUTH\", \"premStreet\": \"104 RAMAH CIRCLE SOUTH\", \"voicePhone\": \"4132731865\", \"mailZipCode\": \"01001\", \"premZipCode\": \"01001\", \"allowToEnter\": false, \"licHolderName\": \"OPTIMUM PARTS COMPANY, INC\"}",
            "trade_with_listing_type": null,
            "listingLocation": "{\"street\": \"City Hall Square\", \"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"City Hall Square\", \"boundingBox\": {\"entity\": \"position\", \"northEast\": {\"lat\": 42.360269, \"lng\": -71.058601}, \"southWest\": {\"lat\": 42.360092, \"lng\": -71.05865}}, \"countryCode\": \"US\", \"municipality\": \"Boston\", \"routeNumbers\": [], \"streetNumber\": \"1\", \"buildingNumber\": \"1\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"1 City Hall Square, Boston, MA 02114\", \"countrySubdivision\": \"MA\", \"extendedPostalCode\": \"02114-1835\", \"streetNameAndNumber\": \"1 City Hall Square\", \"countrySubdivisionName\": \"Massachusetts\", \"municipalitySubdivision\": \"Downtown Boston\", \"countrySecondarySubdivision\": \"Suffolk\"}",
            "primary": false,
            "returnable": false,
            "shipBeyondPreferredDistance": false,
            "shippingFeesLocationBased": true,
            "shippingFree": false,
            "tconditionSid": "11CD3651BACF1593E64C8A85C70E01719D271EFCFDC5FAF853EB41653014CA2F",
            "offeredATrade": false,
            "fflStoreEnabled": true,
            "sheriffOfficeEnabled": true,
            "bundled": false,
            "tconditionName": "New"
        },
        {
            "sid": "D42A633C58D14DAAA01B1BFB5934CEA79C66159536F34B7B90760A4CC6E8EF40",
            "latitude": "42.3600825",
            "longitude": "-71.0588801",
            "title": "AR-15 TACTICAL AR PACKAGE 15 Rifle M&P 15 5.56",
            "description": "AR-15 TACTICAL AR PACKAGE 15 Rifle M&P 15 5.56",
            "trade": false,
            "sell": true,
            "auction": false,
            "estimatedPrice": 899.0,
            "sellPrice": 899.0,
            "auctionReservePrice": null,
            "auctionExpireOn": null,
            "tradeReservePrice": null,
            "tradeExpiresOn": null,
            "tradeWithListingType": null,
            "deliveryType": "BOTH",
            "availableOtherLocation": true,
            "consentProvided": true,
            "listingType": "INDIVIDUAL",
            "postedOn": "2023-04-07T06:24:52.000+0000",
            "updatedOn": "2023-04-07T06:24:52.000+0000",
            "listingDetailsStatus": "ACTIVE",
            "thLocation": null,
            "categorySid": "3391C910AAA8419285D4A319FD8B8F6781EA011BCC1A4C049D47190D08E9BF75",
            "manufacturerSid": "5E5056F0AD51750F96EE0C63986A779400000000000000000000000000000000",
            "modelSid": null,
            "caliberSid": null,
            "barrelLengthSid": null,
            "capacitySid": null,
            "frameFinishSid": null,
            "gripsSid": null,
            "currencySid": "8BF00242C993A4CD5EEE5987DBCB256706FB2BD7D78152E20DA3B6068FAD5735",
            "listingDetailsContent": "[{\"order\": 0, \"fileName\": \"https://gtraderz-upload.s3.amazonaws.com/1680848660800-rifle1.jpg\", \"mediaType\": \"images\"}]",
            "rating": false,
            "distance": "0.23795074664471938",
            "fflStoreSid": null,
            "postedBy": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "pre1968": false,
            "serialNumber": "{\"listing\":\"Item 1\",\"serialNumber\":\"23468902376489\"}",
            "modelName": null,
            "manufacturerName": "ASC Pty Ltd (ASC)",
            "caliberName": null,
            "barrelLengthName": null,
            "capacityName": null,
            "frameFinishName": null,
            "gripsName": null,
            "categoryName": "Rifle",
            "totalEstimatedPrice": null,
            "platformVariables": "{\"returnPeriod\": \"\", \"restockingFees\": {\"amount\": \"\", \"percentage\": \"\"}}",
            "listingPreferredDistance": "50",
            "fixedShippingFees": null,
            "quantity": 1,
            "itemType": "FIRE_ARM",
            "fflStoreName": null,
            "fflPremiseCity": null,
            "fflPremiseStreet": null,
            "fflPremiseZipCode": null,
            "fflPremiseState": null,
            "fflPhoneNumber": null,
            "sheriffOfficeLocation": "{\"poi\": {\"name\": \"Comm of Mass Joann Gora\"}, \"dist\": 0.13997300410036792, \"name\": \"Comm of Mass Joann Gora, 8 Myrtle Street, Boston, MA 02114\", \"address\": {\"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"Myrtle Street\", \"countryCode\": \"US\", \"municipality\": \"Boston\", \"streetNumber\": \"8\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"8 Myrtle Street, Boston, MA 02114\", \"countrySubdivisionName\": \"Massachusetts\"}}",
            "anyOtherLocations": "{\"url\": \"https://maps.google.com/?q=Boston,+MA,+USA&ftid=0x89e3652d0d3d311b:0x787cbf240162e8a0\", \"icon\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png\", \"name\": \"Boston\", \"types\": [\"locality\", \"political\"], \"photos\": [{\"width\": 4032, \"height\": 2268, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/111384779248250082343\\\">The Chicken Parm Guy</a>\"]}, {\"width\": 3024, \"height\": 4032, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105364850726965652918\\\">biotifun zaza (biotifunzaza)</a>\"]}, {\"width\": 1200, \"height\": 675, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}, {\"width\": 4320, \"height\": 3240, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/117851538676337143368\\\">곽준근</a>\"]}, {\"width\": 393, \"height\": 600, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/113031672060836622421\\\">Sergio Luis Garcia</a>\"]}, {\"width\": 4096, \"height\": 3072, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/103700589738958165786\\\">Kettering</a>\"]}, {\"width\": 960, \"height\": 432, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/105984507955832557811\\\">Aziz Modak</a>\"]}, {\"width\": 4032, \"height\": 3024, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/107775811396158620011\\\">Xabier Lizartzategi</a>\"]}, {\"width\": 3898, \"height\": 1979, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/116063579870013643319\\\">Chico Khan</a>\"]}, {\"width\": 1200, \"height\": 900, \"html_attributions\": [\"<a href=\\\"https://maps.google.com/maps/contrib/104466005256044944108\\\">Alby Set</a>\"]}], \"website\": \"http://www.cityofboston.gov/\", \"geometry\": {\"location\": {\"lat\": 42.3600825, \"lng\": -71.0588801}, \"viewport\": {\"east\": -70.74945501944023, \"west\": -71.19111298647394, \"north\": 42.4008198878762, \"south\": 42.22788002056647}}, \"place_id\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"vicinity\": \"Boston\", \"reference\": \"ChIJGzE9DS1l44kRoOhiASS_fHg\", \"utc_offset\": -240, \"adr_address\": \"<span class=\\\"locality\\\">Boston</span>, <span class=\\\"region\\\">MA</span>, <span class=\\\"country-name\\\">USA</span>\", \"formatted_address\": \"Boston, MA, USA\", \"html_attributions\": [], \"address_components\": [{\"types\": [\"locality\", \"political\"], \"long_name\": \"Boston\", \"short_name\": \"Boston\"}, {\"types\": [\"administrative_area_level_2\", \"political\"], \"long_name\": \"Suffolk County\", \"short_name\": \"Suffolk County\"}, {\"types\": [\"administrative_area_level_1\", \"political\"], \"long_name\": \"Massachusetts\", \"short_name\": \"MA\"}, {\"types\": [\"country\", \"political\"], \"long_name\": \"United States\", \"short_name\": \"US\"}], \"icon_mask_base_uri\": \"https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet\", \"utc_offset_minutes\": -240, \"icon_background_color\": \"#7B9EB0\"}",
            "appUsersSid": "9ED677D182184DA1B45CF8FEB73FCA476A593A82EBDE405BBF38400DB57B9F62",
            "secondaryListings": null,
            "fflStoreLocation": "{\"sid\": null, \"licDist\": \"04\", \"licRegn\": \"6\", \"licSeqn\": \"14630\", \"licType\": \"07\", \"licExpDt\": \"3L\", \"mailCity\": \"AGAWAM\", \"premCity\": \"AGAWAM\", \"licCounty\": \"013\", \"mailState\": \"MA\", \"premState\": \"MA\", \"storeName\": \"OPC\", \"mailStreet\": \"104 RAMAH CIRCLE SOUTH\", \"premStreet\": \"104 RAMAH CIRCLE SOUTH\", \"voicePhone\": \"4132731865\", \"mailZipCode\": \"01001\", \"premZipCode\": \"01001\", \"allowToEnter\": false, \"licHolderName\": \"OPTIMUM PARTS COMPANY, INC\"}",
            "trade_with_listing_type": null,
            "listingLocation": "{\"street\": \"City Hall Square\", \"country\": \"United States\", \"localName\": \"Boston\", \"postalCode\": \"02114\", \"streetName\": \"City Hall Square\", \"boundingBox\": {\"entity\": \"position\", \"northEast\": {\"lat\": 42.360269, \"lng\": -71.058601}, \"southWest\": {\"lat\": 42.360092, \"lng\": -71.05865}}, \"countryCode\": \"US\", \"municipality\": \"Boston\", \"routeNumbers\": [], \"streetNumber\": \"1\", \"buildingNumber\": \"1\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"1 City Hall Square, Boston, MA 02114\", \"countrySubdivision\": \"MA\", \"extendedPostalCode\": \"02114-1835\", \"streetNameAndNumber\": \"1 City Hall Square\", \"countrySubdivisionName\": \"Massachusetts\", \"municipalitySubdivision\": \"Downtown Boston\", \"countrySecondarySubdivision\": \"Suffolk\"}",
            "primary": false,
            "returnable": false,
            "shipBeyondPreferredDistance": false,
            "shippingFeesLocationBased": true,
            "shippingFree": false,
            "tconditionSid": "11CD3651BACF1593E64C8A85C70E01719D271EFCFDC5FAF853EB41653014CA2F",
            "offeredATrade": false,
            "fflStoreEnabled": true,
            "sheriffOfficeEnabled": true,
            "bundled": false,
            "tconditionName": "New"
        },
        {
            "sid": "FB05804167574FBD9E7EEDA4D6B3CB4955BFF87CCCD34F8EA2EAB1946C1F13D8",
            "latitude": "39.1682449",
            "longitude": "-86.52300729999999",
            "title": "Smg",
            "description": "Smg1",
            "trade": false,
            "sell": true,
            "auction": false,
            "estimatedPrice": 3000.0,
            "sellPrice": 3000.0,
            "auctionReservePrice": null,
            "auctionExpireOn": null,
            "tradeReservePrice": null,
            "tradeExpiresOn": null,
            "tradeWithListingType": null,
            "deliveryType": "BOTH",
            "availableOtherLocation": false,
            "consentProvided": true,
            "listingType": "INDIVIDUAL",
            "postedOn": "2022-12-29T05:44:26.000+0000",
            "updatedOn": "2022-12-29T05:44:27.000+0000",
            "listingDetailsStatus": "ACTIVE",
            "thLocation": null,
            "categorySid": "A3563F0A815B41E3ADA883D6D6B60E82925C54704B4A4AD7A3C8DB4076013F60",
            "manufacturerSid": "5E5056F0AD51750F96EE0C63986A779400000000000000000000000000000000",
            "modelSid": "E162BDDEE44EE2667BE549BEBA13A8F400000000000000000000000000000000",
            "caliberSid": "DF00EC13A4B6C9B32C1C5D83DB302E5E00000000000000000000000000000000",
            "barrelLengthSid": "ADF1FF5F7E8BF0ADE1B0F0679AEE2C6300000000000000000000000000000000",
            "capacitySid": "1D42878622E75C0DC950457D8252390200000000000000000000000000000000",
            "frameFinishSid": "005E27F9DA1054D8CF364DA8D6FE3BAA00000000000000000000000000000000",
            "gripsSid": "6A3D0E6F1A8A44A6B3000F8929955C688690C693E46D4B56B1FD6744543328A3",
            "currencySid": "8BF00242C993A4CD5EEE5987DBCB256706FB2BD7D78152E20DA3B6068FAD5735",
            "listingDetailsContent": "[{\"order\": 0, \"fileName\": \"https://gtraderz-upload.s3.amazonaws.com/1672292652118-stngr-industries-qDWiLMxCKCI-unsplash.jpg\", \"mediaType\": \"images\"}]",
            "rating": false,
            "distance": "837.2734333555072",
            "fflStoreSid": null,
            "postedBy": "CDFBBBFE92944E3BA3D4CBAF028E08718FC9E6742F0A471D8D078C455B74F0C5",
            "pre1968": false,
            "serialNumber": null,
            "modelName": "Kalashnikov AK-47",
            "manufacturerName": "ASC Pty Ltd (ASC)",
            "caliberName": "Rifle's",
            "barrelLengthName": "16 inch",
            "capacityName": "Semi-automatic",
            "frameFinishName": "Black oxide",
            "gripsName": "grips1",
            "categoryName": "Semi Auto Rifles",
            "totalEstimatedPrice": null,
            "platformVariables": "{\"returnPeriod\": \"3\", \"restockingFees\": {\"amount\": \"20\", \"percentage\": \"10\"}}",
            "listingPreferredDistance": "50",
            "fixedShippingFees": null,
            "quantity": 1,
            "itemType": "PRE_1968",
            "fflStoreName": null,
            "fflPremiseCity": null,
            "fflPremiseStreet": null,
            "fflPremiseZipCode": null,
            "fflPremiseState": null,
            "fflPhoneNumber": null,
            "sheriffOfficeLocation": null,
            "anyOtherLocations": null,
            "appUsersSid": "CDFBBBFE92944E3BA3D4CBAF028E08718FC9E6742F0A471D8D078C455B74F0C5",
            "secondaryListings": null,
            "fflStoreLocation": "{\"sid\": null, \"licDist\": \"61\", \"licRegn\": \"4\", \"licSeqn\": \"07056\", \"licType\": \"01\", \"licExpDt\": \"2G\", \"mailCity\": \"BEDFORD\", \"premCity\": \"BEDFORD\", \"licCounty\": \"223\", \"mailState\": \"KY\", \"premState\": \"KY\", \"storeName\": \"GOTTA GETTA GUN\", \"mailStreet\": \"6769 HWY 421 N\", \"premStreet\": \"6769 HWY 421 N\", \"voicePhone\": \"5026437825\", \"mailZipCode\": \"40006\", \"premZipCode\": \"40006\", \"allowToEnter\": false, \"licHolderName\": \"COLLUM, LORETTO W & TINGLER, RUSSELL W\"}",
            "trade_with_listing_type": null,
            "listingLocation": "{\"street\": \"East 7th Street\", \"country\": \"United States\", \"localName\": \"Bloomington\", \"postalCode\": \"47405\", \"streetName\": \"East 7th Street\", \"boundingBox\": {\"entity\": \"position\", \"northEast\": {\"lat\": 39.168484, \"lng\": -86.522784}, \"southWest\": {\"lat\": 39.16848, \"lng\": -86.52324}}, \"countryCode\": \"US\", \"municipality\": \"Bloomington\", \"routeNumbers\": [], \"streetNumber\": \"809\", \"buildingNumber\": \"809\", \"countryCodeISO3\": \"USA\", \"freeformAddress\": \"809 East 7th Street, Bloomington, IN 47405\", \"countrySubdivision\": \"IN\", \"extendedPostalCode\": \"47405-3937\", \"streetNameAndNumber\": \"809 East 7th Street\", \"countrySubdivisionName\": \"Indiana\", \"countrySecondarySubdivision\": \"Monroe\"}",
            "primary": false,
            "returnable": true,
            "shipBeyondPreferredDistance": false,
            "shippingFeesLocationBased": true,
            "shippingFree": false,
            "tconditionSid": "11CD3651BACF1593E64C8A85C70E01719D271EFCFDC5FAF853EB41653014CA2F",
            "offeredATrade": false,
            "fflStoreEnabled": true,
            "sheriffOfficeEnabled": false,
            "bundled": false,
            "tconditionName": "New"
        }
    ]
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const payload = {
                sort: 'CREATED',
                "exclAppuserId": userDetails.user.sid,
                "latitude": location?.position?.lat,
                "longitude": location?.position?.lng || location?.position?.lon,
                "distance": 1000,
                "distanceUnit": "ml"
            };
            spinner.show("Please wait...");
            ApiService.searchProducts(payload).then(
                response => {
                    setData(response.data.splice(0, 3));
                },
                err => {
                    if(err?.response?.status === 406 && err?.response?.data?.error === "Services are only available for United States locations.") {
                        history.replace("/page-not-found");
                    } else {
                        Toast.error({ message: err.response?.data ? err.response?.data?.error : 'Data loading error', time: 2000 });
                    }
                }
            ).finally(() => {
                spinner.hide();
                setIsLoading(false);
            });
        };
        fetchData();
    }, [location?.position?.lat]);

    const getMyImage = (item) => {
        let imageUrl = '../images/no-image-available.png';
        if (!_.isEmpty(item.listingDetailsContent)) {
            const imagesByItem = JSON.parse(item.listingDetailsContent)[0];
            imageUrl = imagesByItem && imagesByItem.fileName ? imagesByItem.fileName : '../images/no-image-available.png';
        }
        return imageUrl;
    }

    return (
        <Carousel className="banner-carousel" activeIndex={index} onSelect={handleSelect}>
            {
                data.length > 0 ? data.map((item, i) => {
                    return <Carousel.Item key={i}>
                        <div className="prod-banner-transp"></div>
                        <div className="prod-banner-container" style={{backgroundImage: `url(${getMyImage(item)})`}}></div>
                        <Carousel.Caption>
                            <h1>{item.title}</h1>
                            {/* <Link to={{
                                        pathname: "/product/" + item.sid,
                                        state:  {
                                            breadcrumb: [{
                                                name: "Home",
                                                path: "/"
                                            },
                                            {
                                                name: item.title,
                                                path: `/product/${item.sid}`
                                            }
                                           ],
                                           itemInfo: item
                                        }
                                      }} class="banner-btn" onClick={()=>{}}>Shop Now</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                })
                : 
                hardCodeData.map((item, i) => {
                    return <Carousel.Item key={i}>
                        <div className="prod-banner-transp"></div>
                        <div className="prod-banner-container" style={{backgroundImage: `url(${getMyImage(item)})`}}></div>
                        <Carousel.Caption>
                            <h1>{item.title}</h1>
                            {/* <Link to={{
                                        pathname: "/product/" + item.sid,
                                        state:  {
                                            breadcrumb: [{
                                                name: "Home",
                                                path: "/"
                                            },
                                            {
                                                name: item.title,
                                                path: `/product/${item.sid}`
                                            }
                                           ],
                                           itemInfo: item
                                        }
                                      }} class="banner-btn" onClick={()=>{}}>Shop Now</Link> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
}
 
export default memo(ProductBanner);