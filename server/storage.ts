import { db } from "./db";
import {
  products,
  contacts,
  type InsertProduct,
  type InsertContact,
  type Product,
  type Contact
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  seedProducts(): Promise<void>;
}

export class MemStorage implements IStorage {
  private products: Product[] = [];
  private contacts: Contact[] = [];
  private currentId = 1;

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.find((p) => p.id === id);
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact = { ...contact, id: this.currentId++ } as Contact;
    this.contacts.push(newContact);
    return newContact;
  }

  async seedProducts(): Promise<void> {
    if (this.products.length === 0) {
      const products: Omit<Product, "id">[] = [
        {
          title: "Technical Analysis Masterclass",
          description: "Complete guide to chart patterns and indicators.",
          price: 49.99,
          category: "book",
          imageUrl: "/assets/news1.jpg",
        },
        {
          title: "Forex Trading Strategies",
          description: "Proven strategies for the currency markets.",
          price: 39.99,
          category: "book",
          imageUrl: "/assets/forex.jpg",
        },
        {
          title: "Risk Management Calculator",
          description: "Essential tool for position sizing and risk control.",
          price: 19.99,
          category: "tool",
          imageUrl: "/assets/platform.jpg",
        },
        {
          title: "Market Sentiment Indicator",
          description: "Gauge the mood of the market in real-time.",
          price: 29.99,
          category: "tool",
          imageUrl: "/assets/stocks.jpg",
        }
      ];

      products.forEach(p => {
        // Cast to any to handle potential type mismatches with price (number vs string) in Product type
        this.products.push({ ...p, id: this.currentId++ } as any);
      });
    }
  }
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db!.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db!.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db!.insert(contacts).values(contact).returning();
    return newContact;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length === 0) {
      await db!.insert(products).values([
        {
          title: "Technical Analysis Masterclass",
          description: "Complete guide to chart patterns and indicators.",
          price: 49.99,
          category: "book",
          imageUrl: "/assets/news1.jpg",
        },
        {
          title: "Forex Trading Strategies",
          description: "Proven strategies for the currency markets.",
          price: 39.99,
          category: "book",
          imageUrl: "/assets/forex.jpg",
        },
        {
          title: "Risk Management Calculator",
          description: "Essential tool for position sizing and risk control.",
          price: 19.99,
          category: "tool",
          imageUrl: "/assets/platform.jpg",
        },
        {
          title: "Market Sentiment Indicator",
          description: "Gauge the mood of the market in real-time.",
          price: 29.99,
          category: "tool",
          imageUrl: "/assets/stocks.jpg",
        }
      ]);
    }
  }
}

export const storage = db ? new DatabaseStorage() : new MemStorage();
