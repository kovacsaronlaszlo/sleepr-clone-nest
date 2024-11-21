import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './models/reservation.schema';

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationRepository.name);
}
