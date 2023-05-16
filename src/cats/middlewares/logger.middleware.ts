import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Incoming Request...');
    next();
  }

  checkAdmin(req: Request, res: Response, next: NextFunction) {
    if (req.headers.isadmin == 'true') {
        next();
    }
    else res.send('NOT AN ADMIN');
  }
}
