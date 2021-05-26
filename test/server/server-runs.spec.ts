import request from "supertest";
import {expect} from "chai";

import createServer from "server";

const app = createServer();

describe("Server tests.", () =>{

    it("Server creted w/o error.", (done) => {
        request(app).get("/").expect(200,done);
    })
})