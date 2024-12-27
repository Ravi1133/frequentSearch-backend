function addUserValidatore(req, res, next) {
    let regexNormal = /^[a-zA-Z ]{3,30}$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let genderregex = /^(male|female|other)$/i;
    let dobregex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    
    let acceptArr = ["firstName", "lastName", "country", "state","eMail","gender","city", "dob"];
    
    let regexArra = {
        "firstName": { name: regexNormal, message: { minLength: "3", maxLength: "30", instruction: "only alphabet are allowed" } },
        "lastName": { name: regexNormal, message: { minLength: "3", maxLength: "30", instruction: "only alphabet are allowed" } },
        "eMail": { name: emailRegex, message: "Please provide a valid email id" },
        "country": { name: regexNormal, message: { minLength: "3", maxLength: "30", instruction: "only alphabet are allowed" } },
        "state": { name: regexNormal, message: { minLength: "3", maxLength: "30", instruction: "only alphabet are allowed" } },
        "city": { name: regexNormal, message: { minLength: "3", maxLength: "30", instruction: "only alphabet are allowed" } },
        "gender": { name: genderregex, message: "Only male, female, or other allowed" },
        "dob": { name: dobregex, message: "Date should be in YYYY-MM-DD format" }
    };

    try {
        console.log("req.body", req.body);

        let notAvailableArr = acceptArr.filter((item) => !Object.keys(req.body).includes(item));
        let extraItem = Object.keys(req.body).filter((item) => !acceptArr.includes(item));

        if (extraItem.length > 0) {
            return res.status(400).json({ message: `Items ${extraItem.join(",")} not allowed` });
        }

        if (notAvailableArr.length > 0) {
            return res.status(400).json({ message: `Required Items ${notAvailableArr.join(",")}` });
        }

        let errorPool = {};

        // Iterate over each property in req.body and validate using regex
        for (let dat in req.body) {
            if (regexArra[dat]) {
                // Apply regex to the value of the property (not the key)
                if (!regexArra[dat].name.test(req.body[dat])) {
                    errorPool[dat] = regexArra[dat].message;
                }
            }
        }

        if (Object.keys(errorPool).length > 0) {
            return res.status(400).json(errorPool);
        }

        // If no validation errors, proceed to the next middleware
        next();

    } catch (err) {
        console.log("Error in addUserValidator", err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

let genderregex = /^(male|female|other)$/
console.log(genderregex.test("male"), "testtt")
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
console.log(emailRegex.test("ravikant@meradc.com"), "check email")
 let dobregex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
 console.log(dobregex.test("1996-02-13"),"dob chekc")
module.exports = addUserValidatore