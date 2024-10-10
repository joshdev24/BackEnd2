
class ResponseBuilder {
    constructor(){
        this.response = {
            ok:  false, 
            status: 500,
            payload: {}
        }
    }
    setStatus(status){
        this.response.status = status
        return this
    }
    setOk (ok){
        this.response.ok = ok
        return this
    }
    setPayload(payload){
        this.response.payload = payload
        return this
    }
    build(){
        return this.response
    }
}

export default ResponseBuilder