import { Usuario } from "../../../../usuarios/domain";

export interface mySqlContactoRepository {
    get(req): Promise<Usuario>;
    getAll(): Promise<Usuario[]>;
    create(req):Promise<number>;
    delete(req): Promise<void>;
    modify(req): Promise<void>;
}