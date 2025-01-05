import { NextFunction, Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class ExpressUserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await ServiceContainer.user.getAll.run();

      return res.json(users.map((user) => user.mapToPrimitives())).status(200);
    } catch (error) {
      next(error);
    }
  }

  async getOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await ServiceContainer.user.getOneById.run(req.params.id);

      return res.json(user.mapToPrimitives()).status(200);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        id,
        countryId,
        userType,
        firstName,
        lastName,
        companyName,
        typeOfIdDocu,
        idNumber,
        dv,
        email,
        number,
        password,
        createdAt,
        updateAt,
        status,
        verified
      }
       = req.body as {
        id: string,
        countryId: string,
        userType: string,
        firstName: string,
        lastName: string,
        companyName: string,
        typeOfIdDocu: string,
        idNumber: string,
        dv: number,
        email: string,
        number: number,
        password: string,
        createdAt: Date,
        updateAt: Date,
        status: string,
        verified: boolean,
      };
      await ServiceContainer.user.create.run(
        id,
        countryId,
        userType,
        firstName,
        lastName,
        companyName,
        typeOfIdDocu,
        idNumber,
        dv,
        email,
        number,
        password,
        new Date(createdAt),
        new Date(updateAt),
        status,
        verified
      );

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        id,
        countryId,
        userType,
        firstName,
        lastName,
        companyName,
        typeOfIdDocu,
        idNumber,
        dv,
        email,
        number,
        password,
        createdAt,
        updateAt,
        status,
        verified
      } = req.body as {
        id: string,
        countryId: string,
        userType: string,
        firstName: string,
        lastName: string,
        companyName: string,
        typeOfIdDocu: string,
        idNumber: string,
        dv: number,
        email: string,
        number: number,
        password: string,
        createdAt: Date,
        updateAt: Date,
        status: string,
        verified: boolean,
      };
      await ServiceContainer.user.edit.run(
        id,
        countryId,
        userType,
        firstName,
        lastName,
        companyName,
        typeOfIdDocu,
        idNumber,
        dv,
        email,
        number,
        password,
        new Date(createdAt),
        new Date(updateAt),
        status,
        verified
      );

      return res.status(204).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceContainer.user.delete.run(req.params.id);

      return res.status(204).send();
    } catch (error) {
      if (error instanceof UserNotFoundError) {
        return res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
