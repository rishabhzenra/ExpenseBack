"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_entity_1 = require("./client.entity");
let ClientsService = class ClientsService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll(userId) {
        return this.repo.find({ where: { userId }, order: { createdAt: 'DESC' } });
    }
    async findOne(id, userId) {
        const client = await this.repo.findOne({ where: { id, userId } });
        if (!client)
            throw new common_1.NotFoundException('Client not found');
        return client;
    }
    create(userId, dto) {
        const client = this.repo.create({ ...dto, userId });
        return this.repo.save(client);
    }
    async update(id, userId, dto) {
        const client = await this.findOne(id, userId);
        Object.assign(client, dto);
        return this.repo.save(client);
    }
    async remove(id, userId) {
        const client = await this.findOne(id, userId);
        return this.repo.remove(client);
    }
    async getStats(userId) {
        const clients = await this.repo.find({ where: { userId } });
        return {
            total: clients.length,
            active: clients.filter(c => c.status === 'active').length,
            totalBilled: clients.reduce((s, c) => s + Number(c.totalBilled), 0),
            totalPaid: clients.reduce((s, c) => s + Number(c.totalPaid), 0),
            outstanding: clients.reduce((s, c) => s + (Number(c.totalBilled) - Number(c.totalPaid)), 0),
        };
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientsService);
//# sourceMappingURL=clients.service.js.map