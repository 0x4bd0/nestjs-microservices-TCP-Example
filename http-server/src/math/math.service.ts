import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";




@Injectable()
export class MathService {
    private client: ClientProxy
    
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8123
            }
        })
    }

    public SumNumbers(data: Array<number>) {
        return this.client.send<number>('add', data)
    }


}