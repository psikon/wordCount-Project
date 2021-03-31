import {Settings} from "../Settings";

export class WordCountService {

    static startWordCountService() {
        fetch(Settings.SERVER + "/start").then((response) => {
                console.log("Server started")
            }
        )
    }

    static stopWordCountService() {
        fetch(Settings.SERVER + "/stop").then((response) => {
                console.log("Server stopped")
            }
        )
    }
}