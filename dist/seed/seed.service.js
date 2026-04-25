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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const expense_entity_1 = require("../expenses/expense.entity");
const expense_category_enum_1 = require("../expenses/expense-category.enum");
const income_entity_1 = require("../income/income.entity");
const income_category_enum_1 = require("../income/income-category.enum");
const savings_goal_entity_1 = require("../savings-goals/savings-goal.entity");
const subscription_entity_1 = require("../subscriptions/subscription.entity");
const client_entity_1 = require("../clients/client.entity");
const invoice_entity_1 = require("../invoices/invoice.entity");
const tax_entry_entity_1 = require("../tax/tax-entry.entity");
const budget_entity_1 = require("../budget/budget.entity");
const investment_entity_1 = require("../investments/investment.entity");
let SeedService = class SeedService {
    expRepo;
    incRepo;
    goalRepo;
    subRepo;
    clientRepo;
    invRepo;
    taxRepo;
    budgetRepo;
    invstRepo;
    constructor(expRepo, incRepo, goalRepo, subRepo, clientRepo, invRepo, taxRepo, budgetRepo, invstRepo) {
        this.expRepo = expRepo;
        this.incRepo = incRepo;
        this.goalRepo = goalRepo;
        this.subRepo = subRepo;
        this.clientRepo = clientRepo;
        this.invRepo = invRepo;
        this.taxRepo = taxRepo;
        this.budgetRepo = budgetRepo;
        this.invstRepo = invstRepo;
    }
    async clearAll(userId) {
        await Promise.all([
            this.expRepo.delete({ userId }),
            this.incRepo.delete({ userId }),
            this.goalRepo.delete({ userId }),
            this.subRepo.delete({ userId }),
            this.clientRepo.delete({ userId }),
            this.invRepo.delete({ userId }),
            this.taxRepo.delete({ userId }),
            this.invstRepo.delete({ userId }),
        ]);
        return { message: 'All demo data cleared successfully' };
    }
    async seedAll(userId) {
        await this.clearAll(userId);
        const existing = await this.budgetRepo.findOne({ where: { userId } });
        if (!existing) {
            await this.budgetRepo.save(this.budgetRepo.create({ userId, monthlyLimit: 200000 }));
        }
        else {
            existing.monthlyLimit = 200000;
            await this.budgetRepo.save(existing);
        }
        const expenseData = [];
        const today = new Date();
        const monthlyExpenseTemplates = [
            { amount: 12000, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'AWS Cloud Services', notes: 'Monthly server hosting', isRecurring: true, isTaxDeductible: true },
            { amount: 8500, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Google Workspace', notes: 'Team collaboration tools', isRecurring: true, isTaxDeductible: true },
            { amount: 6000, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Jio Fiber', notes: 'Broadband & phone', isRecurring: true, isTaxDeductible: true },
            { amount: 4200, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'GitHub Teams', notes: 'Code repository', isRecurring: true, isTaxDeductible: true },
            { amount: 3600, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Figma Professional', notes: 'Design tool license', isRecurring: true, isTaxDeductible: true },
            { amount: 2400, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Notion Team', notes: 'Project management', isRecurring: true, isTaxDeductible: true },
            { amount: 6750, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Slack Pro', notes: 'Team communication', isRecurring: true, isTaxDeductible: true },
            { amount: 3000, category: expense_category_enum_1.ExpenseCategory.BILLS, merchant: 'Linear', notes: 'Issue tracking', isRecurring: true, isTaxDeductible: true },
            { amount: 3200, category: expense_category_enum_1.ExpenseCategory.FOOD, merchant: 'Swiggy Corporate', notes: 'Team lunch', isRecurring: false, isTaxDeductible: false },
            { amount: 1800, category: expense_category_enum_1.ExpenseCategory.FOOD, merchant: 'Starbucks', notes: 'Client coffee meetings', isRecurring: false, isTaxDeductible: false },
            { amount: 2500, category: expense_category_enum_1.ExpenseCategory.FOOD, merchant: 'Zomato', notes: 'Working late dinner', isRecurring: false, isTaxDeductible: false },
            { amount: 1200, category: expense_category_enum_1.ExpenseCategory.FOOD, merchant: 'Barbeque Nation', notes: 'Team celebration', isRecurring: false, isTaxDeductible: false },
            { amount: 15000, category: expense_category_enum_1.ExpenseCategory.TRAVEL, merchant: 'IndiGo Airlines', notes: 'Client meeting Bangalore', isRecurring: false, isTaxDeductible: true },
            { amount: 4800, category: expense_category_enum_1.ExpenseCategory.TRAVEL, merchant: 'Ola Executive', notes: 'Office commute', isRecurring: false, isTaxDeductible: true },
            { amount: 9800, category: expense_category_enum_1.ExpenseCategory.SHOPPING, merchant: 'Dell Technologies', notes: 'Peripherals & equipment', isRecurring: false, isTaxDeductible: true },
            { amount: 4500, category: expense_category_enum_1.ExpenseCategory.SHOPPING, merchant: 'Amazon Business', notes: 'Office supplies', isRecurring: false, isTaxDeductible: true },
            { amount: 7200, category: expense_category_enum_1.ExpenseCategory.SHOPPING, merchant: 'Croma Electronics', notes: 'Tech accessories', isRecurring: false, isTaxDeductible: true },
            { amount: 2000, category: expense_category_enum_1.ExpenseCategory.FUN, merchant: 'BookMyShow', notes: 'Team outing / events', isRecurring: false, isTaxDeductible: false },
            { amount: 5500, category: expense_category_enum_1.ExpenseCategory.OTHER, merchant: 'Nykaa Fashion', notes: 'Promotional merchandise', isRecurring: false, isTaxDeductible: true },
            { amount: 3800, category: expense_category_enum_1.ExpenseCategory.OTHER, merchant: 'PayU Gateway', notes: 'Payment gateway fees', isRecurring: true, isTaxDeductible: true },
        ];
        for (let m = 11; m >= 0; m--) {
            const month = new Date(today.getFullYear(), today.getMonth() - m, 1);
            for (let i = 0; i < monthlyExpenseTemplates.length; i++) {
                const entry = monthlyExpenseTemplates[i];
                const day = Math.min(i + 1, 28);
                const date = new Date(month.getFullYear(), month.getMonth(), day);
                const variance = 0.85 + Math.random() * 0.3;
                expenseData.push({
                    ...entry,
                    amount: Math.round(entry.amount * variance),
                    userId,
                    date: date.toISOString().split('T')[0],
                    isNecessary: entry.isTaxDeductible,
                });
            }
        }
        await this.expRepo.save(this.expRepo.create(expenseData));
        const incomeData = [];
        const incomeTemplates = [
            { amount: 180000, category: income_category_enum_1.IncomeCategory.SALARY, source: 'Savora Technologies Pvt Ltd', notes: 'Monthly CTC credit', isRecurring: true },
            { amount: 45000, category: income_category_enum_1.IncomeCategory.FREELANCE, source: 'TechCorp Global', notes: 'UI/UX consulting retainer', isRecurring: true },
            { amount: 28000, category: income_category_enum_1.IncomeCategory.FREELANCE, source: 'Nexus Innovations', notes: 'Backend development project', isRecurring: false },
            { amount: 12000, category: income_category_enum_1.IncomeCategory.INVESTMENT, source: 'Zerodha Portfolio', notes: 'Equity dividend & capital gains', isRecurring: false },
            { amount: 8000, category: income_category_enum_1.IncomeCategory.OTHER, source: 'Udemy Course Sales', notes: 'Passive income from courses', isRecurring: false },
            { amount: 15000, category: income_category_enum_1.IncomeCategory.FREELANCE, source: 'RetailOne Corp', notes: 'Mobile app consulting', isRecurring: false },
        ];
        for (let m = 11; m >= 0; m--) {
            const month = new Date(today.getFullYear(), today.getMonth() - m, 1);
            const days = [1, 5, 12, 15, 20, 25];
            for (let i = 0; i < incomeTemplates.length; i++) {
                const entry = incomeTemplates[i];
                const date = new Date(month.getFullYear(), month.getMonth(), days[i]);
                const variance = 0.9 + Math.random() * 0.2;
                incomeData.push({
                    ...entry,
                    amount: Math.round(entry.amount * variance),
                    userId,
                    date: date.toISOString().split('T')[0],
                });
            }
        }
        await this.incRepo.save(this.incRepo.create(incomeData));
        await this.goalRepo.save(this.goalRepo.create([
            { userId, title: 'Emergency Fund', target: 600000, current: 420000, deadline: '2025-09-30', icon: 'shield', color: '#2563EB' },
            { userId, title: 'MacBook Pro M4 Max', target: 300000, current: 255000, deadline: '2025-06-30', icon: 'laptop', color: '#7C3AED' },
            { userId, title: 'Europe Trip 2025', target: 400000, current: 145000, deadline: '2025-12-01', icon: 'plane', color: '#059669' },
            { userId, title: 'Down Payment – Apartment', target: 2500000, current: 680000, deadline: '2027-06-01', icon: 'home', color: '#DC2626' },
            { userId, title: 'Startup Capital Fund', target: 1500000, current: 490000, deadline: '2026-09-01', icon: 'rocket', color: '#D97706' },
            { userId, title: 'Wedding Fund', target: 800000, current: 312000, deadline: '2026-02-14', icon: 'heart', color: '#EC4899' },
            { userId, title: 'New Car – Tata Nexon EV', target: 1600000, current: 720000, deadline: '2025-11-01', icon: 'car', color: '#0891B2' },
            { userId, title: 'Higher Education Fund', target: 1000000, current: 88000, deadline: '2028-01-01', icon: 'book', color: '#6366F1' },
        ]));
        await this.subRepo.save(this.subRepo.create([
            { userId, name: 'AWS', description: 'Cloud infrastructure & compute', amount: 12000, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Infrastructure', nextBillingDate: this.nextMonth(), startDate: '2024-01-01' },
            { userId, name: 'GitHub Teams', description: 'Code collaboration & CI/CD', amount: 4200, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Development', nextBillingDate: this.nextMonth(), startDate: '2023-06-01' },
            { userId, name: 'Figma Professional', description: 'UI/UX design tool', amount: 3600, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Design', nextBillingDate: this.nextMonth(), startDate: '2023-08-01' },
            { userId, name: 'Notion Team', description: 'Project & knowledge management', amount: 2400, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Productivity', nextBillingDate: this.nextMonth(), startDate: '2024-02-01' },
            { userId, name: 'Slack Pro', description: 'Team communication', amount: 6750, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Communication', nextBillingDate: this.nextMonth(), startDate: '2023-03-01' },
            { userId, name: 'Adobe Creative Cloud', description: 'Full design suite', amount: 54000, billingCycle: subscription_entity_1.BillingCycle.YEARLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Design', nextBillingDate: '2026-01-01', startDate: '2025-01-01' },
            { userId, name: 'Zoom Business', description: 'Video conferencing', amount: 1800, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.PAUSED, category: 'Communication', nextBillingDate: this.nextMonth(), startDate: '2023-09-01' },
            { userId, name: 'Linear', description: 'Issue & project tracking', amount: 3000, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Development', nextBillingDate: this.nextMonth(), startDate: '2024-03-01' },
            { userId, name: 'Vercel Pro', description: 'Frontend deployment platform', amount: 1700, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Infrastructure', nextBillingDate: this.nextMonth(), startDate: '2024-05-01' },
            { userId, name: 'Datadog', description: 'Monitoring & observability', amount: 8900, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Infrastructure', nextBillingDate: this.nextMonth(), startDate: '2024-07-01' },
            { userId, name: 'Loom Business', description: 'Async video messaging', amount: 1200, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Productivity', nextBillingDate: this.nextMonth(), startDate: '2024-09-01' },
            { userId, name: 'Grammarly Business', description: 'AI writing assistant', amount: 2800, billingCycle: subscription_entity_1.BillingCycle.MONTHLY, status: subscription_entity_1.SubscriptionStatus.ACTIVE, category: 'Productivity', nextBillingDate: this.nextMonth(), startDate: '2024-10-01' },
        ]));
        const clients = await this.clientRepo.save(this.clientRepo.create([
            { userId, name: 'Arjun Mehta', email: 'arjun.mehta@techcorp.in', phone: '+91 98765 43210', company: 'TechCorp Global Pvt Ltd', address: 'Bandra Kurla Complex, Mumbai 400051', industry: 'Technology', status: client_entity_1.ClientStatus.ACTIVE, totalBilled: 650000, totalPaid: 590000, notes: 'Long-term retainer client. Requires weekly check-ins. Excellent technical team.' },
            { userId, name: 'Priya Sharma', email: 'priya.s@nexus.co', phone: '+91 87654 32109', company: 'Nexus Innovations', address: 'Koramangala, Bangalore 560034', industry: 'SaaS', status: client_entity_1.ClientStatus.ACTIVE, totalBilled: 420000, totalPaid: 420000, notes: 'Full payment always on time. Excellent relationship. Looking to expand scope.' },
            { userId, name: 'Rohit Bansal', email: 'rohit@greenleaf.org', phone: '+91 76543 21098', company: 'GreenLeaf Ventures', address: 'Cyber City, Gurugram 122002', industry: 'Finance', status: client_entity_1.ClientStatus.ACTIVE, totalBilled: 280000, totalPaid: 195000, notes: 'Partial payment. Follow up on remaining 85,000. Good potential for Q2.' },
            { userId, name: 'Ananya Iyer', email: 'a.iyer@healthplus.com', phone: '+91 65432 10987', company: 'HealthPlus Systems', address: 'Jubilee Hills, Hyderabad 500033', industry: 'Healthcare', status: client_entity_1.ClientStatus.INACTIVE, totalBilled: 120000, totalPaid: 120000, notes: 'Phase 1 completed. May return for Phase 2 development in Q3.' },
            { userId, name: 'Vikram Singh', email: 'vikram@retailone.in', phone: '+91 54321 09876', company: 'RetailOne Corp', address: 'Connaught Place, New Delhi 110001', industry: 'Retail', status: client_entity_1.ClientStatus.PROSPECT, totalBilled: 0, totalPaid: 0, notes: 'In negotiation. Proposal sent for ₹3.5L e-commerce project. Hot lead.' },
            { userId, name: 'Kavya Reddy', email: 'kavya@finbridge.io', phone: '+91 91234 56789', company: 'FinBridge Technologies', address: 'HITEC City, Hyderabad 500081', industry: 'Fintech', status: client_entity_1.ClientStatus.ACTIVE, totalBilled: 540000, totalPaid: 540000, notes: 'Premium client. Always on-time payments. Looking to renew annual contract.' },
            { userId, name: 'Sameer Kapoor', email: 'sameer@logisify.co', phone: '+91 80123 45678', company: 'Logisify Solutions', address: 'Whitefield, Bangalore 560066', industry: 'Logistics', status: client_entity_1.ClientStatus.ACTIVE, totalBilled: 190000, totalPaid: 130000, notes: 'New client from referral. First project phase completed. ₹60K pending.' },
            { userId, name: 'Neha Verma', email: 'neha@edutechpro.in', phone: '+91 70987 65432', company: 'EduTech Pro', address: 'Powai, Mumbai 400076', industry: 'Education', status: client_entity_1.ClientStatus.PROSPECT, totalBilled: 0, totalPaid: 0, notes: 'Intro call done. Interested in LMS development. Budget ₹5L. Follow up next week.' },
        ]));
        const clientMap = clients.reduce((m, c) => ({ ...m, [c.name]: c.id }), {});
        await this.invRepo.save(this.invRepo.create([
            {
                userId, invoiceNumber: 'INV-0001', clientId: clientMap['Arjun Mehta'], clientName: 'Arjun Mehta', clientEmail: 'arjun.mehta@techcorp.in',
                clientAddress: 'Bandra Kurla Complex, Mumbai', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2024-11-01', dueDate: '2024-12-01', paidDate: '2024-11-28',
                items: [{ description: 'Full-Stack Development – Nov 2024', quantity: 1, rate: 120000, amount: 120000 }, { description: 'Deployment & DevOps Setup', quantity: 1, rate: 30000, amount: 30000 }],
                subtotal: 150000, taxRate: 18, taxAmount: 27000, total: 177000, currency: 'INR', notes: 'Thank you for your business!',
            },
            {
                userId, invoiceNumber: 'INV-0002', clientId: clientMap['Priya Sharma'], clientName: 'Priya Sharma', clientEmail: 'priya.s@nexus.co',
                clientAddress: 'Koramangala, Bangalore', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2024-12-01', dueDate: '2025-01-01', paidDate: '2024-12-29',
                items: [{ description: 'UI/UX Design – Dashboard Revamp', quantity: 1, rate: 80000, amount: 80000 }, { description: 'Prototype & Handoff', quantity: 1, rate: 20000, amount: 20000 }],
                subtotal: 100000, taxRate: 18, taxAmount: 18000, total: 118000, currency: 'INR', notes: '',
            },
            {
                userId, invoiceNumber: 'INV-0003', clientId: clientMap['Kavya Reddy'], clientName: 'Kavya Reddy', clientEmail: 'kavya@finbridge.io',
                clientAddress: 'HITEC City, Hyderabad', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2025-01-10', dueDate: '2025-02-10', paidDate: '2025-02-08',
                items: [{ description: 'Fintech Dashboard Development', quantity: 1, rate: 140000, amount: 140000 }, { description: 'API Integrations & Testing', quantity: 1, rate: 40000, amount: 40000 }],
                subtotal: 180000, taxRate: 18, taxAmount: 32400, total: 212400, currency: 'INR', notes: 'Phase 1 complete. Phase 2 to begin March.',
            },
            {
                userId, invoiceNumber: 'INV-0004', clientId: clientMap['Arjun Mehta'], clientName: 'Arjun Mehta', clientEmail: 'arjun.mehta@techcorp.in',
                clientAddress: 'Bandra Kurla Complex, Mumbai', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2025-02-01', dueDate: '2025-03-01', paidDate: '2025-02-27',
                items: [{ description: 'Full-Stack Development – Feb 2025', quantity: 1, rate: 120000, amount: 120000 }, { description: 'Performance Optimization', quantity: 1, rate: 15000, amount: 15000 }],
                subtotal: 135000, taxRate: 18, taxAmount: 24300, total: 159300, currency: 'INR', notes: '',
            },
            {
                userId, invoiceNumber: 'INV-0005', clientId: clientMap['Rohit Bansal'], clientName: 'Rohit Bansal', clientEmail: 'rohit@greenleaf.org',
                clientAddress: 'Cyber City, Gurugram', status: invoice_entity_1.InvoiceStatus.OVERDUE, issueDate: '2025-02-15', dueDate: '2025-03-15',
                items: [{ description: 'Financial Dashboard Development', quantity: 1, rate: 95000, amount: 95000 }, { description: 'API Integration', quantity: 1, rate: 25000, amount: 25000 }],
                subtotal: 120000, taxRate: 18, taxAmount: 21600, total: 141600, currency: 'INR', notes: 'Payment overdue. Please clear at earliest.',
            },
            {
                userId, invoiceNumber: 'INV-0006', clientId: clientMap['Priya Sharma'], clientName: 'Priya Sharma', clientEmail: 'priya.s@nexus.co',
                clientAddress: 'Koramangala, Bangalore', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2025-03-01', dueDate: '2025-04-01', paidDate: '2025-03-28',
                items: [{ description: 'Mobile App UI Design', quantity: 1, rate: 70000, amount: 70000 }, { description: 'Design System Documentation', quantity: 1, rate: 15000, amount: 15000 }],
                subtotal: 85000, taxRate: 18, taxAmount: 15300, total: 100300, currency: 'INR', notes: '',
            },
            {
                userId, invoiceNumber: 'INV-0007', clientId: clientMap['Kavya Reddy'], clientName: 'Kavya Reddy', clientEmail: 'kavya@finbridge.io',
                clientAddress: 'HITEC City, Hyderabad', status: invoice_entity_1.InvoiceStatus.SENT, issueDate: '2025-03-20', dueDate: '2025-04-20',
                items: [{ description: 'Fintech Platform – Phase 2', quantity: 1, rate: 160000, amount: 160000 }, { description: 'Security Audit & Compliance', quantity: 1, rate: 35000, amount: 35000 }],
                subtotal: 195000, taxRate: 18, taxAmount: 35100, total: 230100, currency: 'INR', notes: 'Due 20th April. Awaiting confirmation.',
            },
            {
                userId, invoiceNumber: 'INV-0008', clientId: clientMap['Arjun Mehta'], clientName: 'Arjun Mehta', clientEmail: 'arjun.mehta@techcorp.in',
                clientAddress: 'Bandra Kurla Complex, Mumbai', status: invoice_entity_1.InvoiceStatus.SENT, issueDate: '2025-04-01', dueDate: '2025-05-01',
                items: [{ description: 'Full-Stack Development – Apr 2025', quantity: 1, rate: 120000, amount: 120000 }, { description: 'Cloud Infrastructure Setup', quantity: 1, rate: 25000, amount: 25000 }],
                subtotal: 145000, taxRate: 18, taxAmount: 26100, total: 171100, currency: 'INR', notes: '',
            },
            {
                userId, invoiceNumber: 'INV-0009', clientId: clientMap['Sameer Kapoor'], clientName: 'Sameer Kapoor', clientEmail: 'sameer@logisify.co',
                clientAddress: 'Whitefield, Bangalore', status: invoice_entity_1.InvoiceStatus.OVERDUE, issueDate: '2025-03-10', dueDate: '2025-04-10',
                items: [{ description: 'Logistics Portal Development', quantity: 1, rate: 90000, amount: 90000 }, { description: 'Driver App – MVP', quantity: 1, rate: 50000, amount: 50000 }],
                subtotal: 140000, taxRate: 18, taxAmount: 25200, total: 165200, currency: 'INR', notes: 'Overdue by 11 days. Send reminder.',
            },
            {
                userId, invoiceNumber: 'INV-0010', clientId: clientMap['Ananya Iyer'], clientName: 'Ananya Iyer', clientEmail: 'a.iyer@healthplus.com',
                clientAddress: 'Jubilee Hills, Hyderabad', status: invoice_entity_1.InvoiceStatus.PAID, issueDate: '2025-02-01', dueDate: '2025-03-01', paidDate: '2025-02-25',
                items: [{ description: 'Healthcare Portal Maintenance – Q1', quantity: 3, rate: 20000, amount: 60000 }],
                subtotal: 60000, taxRate: 18, taxAmount: 10800, total: 70800, currency: 'INR', notes: 'Quarterly maintenance contract.',
            },
            {
                userId, invoiceNumber: 'INV-0011', clientId: clientMap['Rohit Bansal'], clientName: 'Rohit Bansal', clientEmail: 'rohit@greenleaf.org',
                clientAddress: 'Cyber City, Gurugram', status: invoice_entity_1.InvoiceStatus.DRAFT, issueDate: '2025-04-15', dueDate: '2025-05-15',
                items: [{ description: 'Analytics Dashboard – Phase 2', quantity: 1, rate: 80000, amount: 80000 }],
                subtotal: 80000, taxRate: 18, taxAmount: 14400, total: 94400, currency: 'INR', notes: 'Draft – confirm scope before sending.',
            },
            {
                userId, invoiceNumber: 'INV-0012', clientId: clientMap['Sameer Kapoor'], clientName: 'Sameer Kapoor', clientEmail: 'sameer@logisify.co',
                clientAddress: 'Whitefield, Bangalore', status: invoice_entity_1.InvoiceStatus.DRAFT, issueDate: '2025-04-20', dueDate: '2025-05-20',
                items: [{ description: 'Route Optimization Module', quantity: 1, rate: 60000, amount: 60000 }, { description: 'Testing & QA', quantity: 1, rate: 15000, amount: 15000 }],
                subtotal: 75000, taxRate: 18, taxAmount: 13500, total: 88500, currency: 'INR', notes: 'Pending final feature sign-off.',
            },
        ]));
        await this.taxRepo.save(this.taxRepo.create([
            { userId, title: 'Advance Tax – Q3 FY 2024-25', category: tax_entry_entity_1.TaxCategory.ADVANCE_TAX, status: tax_entry_entity_1.TaxStatus.PAID, amount: 38000, dueDate: '2024-12-15', paidDate: '2024-12-12', financialYear: 'FY 2024-25', referenceNumber: 'ADV-Q3-2425', notes: 'Paid via NSDL portal' },
            { userId, title: 'GST Return – November 2024', category: tax_entry_entity_1.TaxCategory.GST, status: tax_entry_entity_1.TaxStatus.FILED, amount: 58200, dueDate: '2024-12-20', paidDate: '2024-12-18', financialYear: 'FY 2024-25', referenceNumber: 'GSTR-NOV24', notes: 'GSTR-1 & GSTR-3B filed on time' },
            { userId, title: 'GST Return – December 2024', category: tax_entry_entity_1.TaxCategory.GST, status: tax_entry_entity_1.TaxStatus.FILED, amount: 62400, dueDate: '2025-01-20', paidDate: '2025-01-19', financialYear: 'FY 2024-25', referenceNumber: 'GSTR-DEC24', notes: 'GSTR-1 & GSTR-3B filed' },
            { userId, title: 'TDS on Professional Fees – Q3', category: tax_entry_entity_1.TaxCategory.TDS, status: tax_entry_entity_1.TaxStatus.PAID, amount: 18500, dueDate: '2025-01-07', paidDate: '2025-01-05', financialYear: 'FY 2024-25', referenceNumber: 'TDS-Q3-2425', notes: 'TDS deducted by TechCorp Global & Nexus' },
            { userId, title: 'Advance Tax – Q4 FY 2024-25', category: tax_entry_entity_1.TaxCategory.ADVANCE_TAX, status: tax_entry_entity_1.TaxStatus.PAID, amount: 42000, dueDate: '2025-03-15', paidDate: '2025-03-12', financialYear: 'FY 2024-25', referenceNumber: 'ADV-Q4-2425', notes: 'Paid via NSDL portal. Full advance tax settled.' },
            { userId, title: 'GST Return – February 2025', category: tax_entry_entity_1.TaxCategory.GST, status: tax_entry_entity_1.TaxStatus.FILED, amount: 68400, dueDate: '2025-03-20', paidDate: '2025-03-18', financialYear: 'FY 2024-25', referenceNumber: 'GSTR-FEB25', notes: 'GSTR-1 & GSTR-3B filed' },
            { userId, title: 'GST Return – March 2025', category: tax_entry_entity_1.TaxCategory.GST, status: tax_entry_entity_1.TaxStatus.PENDING, amount: 72000, dueDate: '2025-04-20', financialYear: 'FY 2024-25', referenceNumber: '', notes: 'Prepare GSTR-1 data from April invoices' },
            { userId, title: 'Income Tax – Self Assessment FY 2024-25', category: tax_entry_entity_1.TaxCategory.INCOME_TAX, status: tax_entry_entity_1.TaxStatus.PENDING, amount: 115000, dueDate: '2025-07-31', financialYear: 'FY 2024-25', referenceNumber: '', notes: 'Consult CA before filing. Collect Form 16 & 26AS.' },
            { userId, title: 'TDS on Professional Fees – Q4', category: tax_entry_entity_1.TaxCategory.TDS, status: tax_entry_entity_1.TaxStatus.PENDING, amount: 21000, dueDate: '2025-05-07', financialYear: 'FY 2024-25', referenceNumber: '', notes: 'Collect TDS certificates from clients before filing.' },
            { userId, title: 'Property Tax – FY 2024-25', category: tax_entry_entity_1.TaxCategory.PROPERTY_TAX, status: tax_entry_entity_1.TaxStatus.OVERDUE, amount: 18500, dueDate: '2025-03-31', financialYear: 'FY 2024-25', referenceNumber: '', notes: 'Municipal corporation – late fee of ₹925 may apply. Pay immediately.' },
        ]));
        await this.invstRepo.save(this.invstRepo.create([
            { userId, name: 'Reliance Industries', type: investment_entity_1.InvestmentType.STOCKS, investedAmount: 180000, currentValue: 238500, platform: 'Zerodha', ticker: 'RELIANCE', purchaseDate: '2023-06-15', notes: 'Long-term hold. Trailing 18 months.' },
            { userId, name: 'TCS', type: investment_entity_1.InvestmentType.STOCKS, investedAmount: 120000, currentValue: 108900, platform: 'Zerodha', ticker: 'TCS', purchaseDate: '2024-03-10', notes: 'IT sector. Averaging down on dips.' },
            { userId, name: 'Infosys Ltd', type: investment_entity_1.InvestmentType.STOCKS, investedAmount: 85000, currentValue: 79200, platform: 'Zerodha', ticker: 'INFY', purchaseDate: '2024-01-10', notes: 'IT sector exposure.' },
            { userId, name: 'HDFC Flexi Cap Fund', type: investment_entity_1.InvestmentType.MUTUAL_FUND, investedAmount: 360000, currentValue: 452000, platform: 'Groww', ticker: 'HDFCFLEXICAP', purchaseDate: '2022-10-01', notes: 'SIP ₹15,000/month. Core holding.' },
            { userId, name: 'Mirae Asset Large Cap', type: investment_entity_1.InvestmentType.MUTUAL_FUND, investedAmount: 240000, currentValue: 298000, platform: 'Kuvera', ticker: 'MIRAELARGE', purchaseDate: '2022-07-01', notes: 'Core portfolio. Long-term.' },
            { userId, name: 'Parag Parikh Flexi Cap', type: investment_entity_1.InvestmentType.MUTUAL_FUND, investedAmount: 180000, currentValue: 224000, platform: 'Kuvera', ticker: 'PPFCF', purchaseDate: '2023-01-15', notes: 'International diversification via this fund.' },
            { userId, name: 'Bitcoin', type: investment_entity_1.InvestmentType.CRYPTO, investedAmount: 150000, currentValue: 218000, platform: 'CoinDCX', ticker: 'BTC', purchaseDate: '2023-11-20', notes: 'High risk allocation. Max 10% of portfolio.' },
            { userId, name: 'Ethereum', type: investment_entity_1.InvestmentType.CRYPTO, investedAmount: 80000, currentValue: 94500, platform: 'CoinDCX', ticker: 'ETH', purchaseDate: '2024-02-01', notes: 'DeFi exposure.' },
            { userId, name: 'SBI Fixed Deposit', type: investment_entity_1.InvestmentType.FIXED_DEPOSIT, investedAmount: 500000, currentValue: 539000, platform: 'SBI', ticker: null, purchaseDate: '2024-03-01', notes: '7.1% p.a. for 1 year. Matures March 2025.' },
            { userId, name: 'Sovereign Gold Bond 2023', type: investment_entity_1.InvestmentType.GOLD, investedAmount: 95000, currentValue: 118000, platform: 'HDFC Bank', ticker: 'SGB2023', purchaseDate: '2023-04-10', notes: '2.5% annual interest + gold price returns.' },
            { userId, name: 'PPF Account', type: investment_entity_1.InvestmentType.PPF, investedAmount: 150000, currentValue: 163500, platform: 'Post Office', ticker: null, purchaseDate: '2023-04-01', notes: '7.1% p.a. tax-free. Lock-in 15 years.' },
            { userId, name: 'NIFTY 50 Index Fund', type: investment_entity_1.InvestmentType.MUTUAL_FUND, investedAmount: 200000, currentValue: 251000, platform: 'Groww', ticker: 'NIFTY50IDX', purchaseDate: '2023-08-01', notes: 'Passive index exposure. Low expense ratio.' },
        ]));
        return { message: 'Demo data seeded successfully! Savora dashboard is fully loaded with rich data.' };
    }
    nextMonth() {
        const d = new Date();
        d.setMonth(d.getMonth() + 1);
        return d.toISOString().split('T')[0];
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_entity_1.Expense)),
    __param(1, (0, typeorm_1.InjectRepository)(income_entity_1.Income)),
    __param(2, (0, typeorm_1.InjectRepository)(savings_goal_entity_1.SavingsGoal)),
    __param(3, (0, typeorm_1.InjectRepository)(subscription_entity_1.Subscription)),
    __param(4, (0, typeorm_1.InjectRepository)(client_entity_1.Client)),
    __param(5, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __param(6, (0, typeorm_1.InjectRepository)(tax_entry_entity_1.TaxEntry)),
    __param(7, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __param(8, (0, typeorm_1.InjectRepository)(investment_entity_1.Investment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeedService);
//# sourceMappingURL=seed.service.js.map