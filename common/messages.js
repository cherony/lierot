// Sama koodi pit�� toimia clientiess� ja serveriss�, siksi t�llainen funktiom��rittely
(function(exports){

    message = {
        id: "1",

        CHAT_SYNC: {
            message: {
                name: "CHAT_SYNC",
                username: null,  // Kenelt� viesti tuli (username)
                text: null       // Viestin sis�lt�
            },
            new: function() {
                // Luo uusi kopio t�st� viestist�
                return JSON.parse(JSON.stringify(this.message));
            }
        },
        AUTH_REQ: {
            message: {
                name: "AUTH_REQ",   // Client l�hett�� t�m�n palvelimelle
                username: null,     // Clientin k�ytt�j�nimi (lue html-lomakkeesta)
                passwordhash: null  // SHA1-koodattu salasanatiiviste (lue html-lomakkeesta ja generoi SHA1-tiiviste)
            },
            new: function() {
                // Luo uusi kopio t�st� viestist�
                return JSON.parse(JSON.stringify(this.message));
            }
        },
        AUTH_RESP: {
            message: {
                name: "AUTH_RESP",  // Palvelin vastaa clientille
                response: "OK/NOK"
            },
            new: function() {
                // Luo uusi kopio t�st� viestist�
                return JSON.parse(JSON.stringify(this.message));
            }
        },
        PING: {
            message: {
                name: "PING",
                value: 0    // Satunnainen merkkijono, vastaus samalla numerolla
            },
            new: function() {
                // Luo uusi kopio t�st� viestist�
                return JSON.parse(JSON.stringify(this.message));
            }
        },
        PONG: {
            message: {
                name: "PONG",
                value: 0      // Palvelimen generoima merkkijono, vastaus samalla merkkijonolla
            },
            new: function() {
                // Luo uusi kopio t�st� viestist�
                return JSON.parse(JSON.stringify(this.message));
            }
        }
    }

    exports.message = message;

})(typeof exports === 'undefined'? this['messages']={}: exports);