import { checkForName } from "./nameChecker";

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    if (checkForName(formText)) {
        console.log("Running checkForName :", formText);
        postData("/api", { formText }).then((data) => {
            console.log(data);
            document.querySelector(".agreement").innerHTML = data.agreement;
            // document.querySelector(".confidence").innerHTML =
            //     data.sentence_list[0].confidence ?? "N/A";
            // document.querySelector(".score").innerHTML =
            //     data.sentence_list[0].score_tag ?? "N/A";
            // document.querySelector(".text").innerHTML =
            //     data.sentence_list[0].text ?? "N/A";
                if (data.sentence_list[0]) {
                    document.querySelector(".confidence").innerHTML =
                        data.sentence_list[0].confidence ?? "N/A";
                    document.querySelector(".score").innerHTML =
                        data.sentence_list[0].score_tag ?? "N/A";
                    document.querySelector(".text").innerHTML =
                        data.sentence_list[0].text ?? "N/A";
                } else {
                    document.querySelector(".confidence").innerHTML = "N/A";
                    document.querySelector(".score").innerHTML = "N/A";
                    document.querySelector(".text").innerHTML = "N/A";
                }
        });
    }
}

// POST request
const postData = async (url = "", dataReq = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataReq),
    });

    try {
        const dataRes = await response.json();
        return dataRes;
    } catch (error) {
        console.log("error", error);
    }
};

export { handleSubmit };
