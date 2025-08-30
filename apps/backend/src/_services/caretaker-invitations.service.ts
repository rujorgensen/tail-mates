import type { EmailService } from '../_core/services/mail.service';
import type { TUserEmail_S } from '@tailmates/shared/interfaces';
import type { Observable } from 'rxjs';

export class CaretakerInvitationsService {

    constructor(
        private readonly _emailService: EmailService,
    ) { }
    // ****************************************************************************
    // *** Update
    // ****************************************************************************

    /**
     * Invites a caretaker.
     * 
     * @param { TUserEmail_S } userEmail
     * 
     * @returns { Observable<void> }
     */
    public inviteCaretaker$(
        userEmail: TUserEmail_S,
    ): Observable<void> {
        throw new Error('inviteCaretaker not implemented');
    }

    // ****************************************************************************
    // *** Read
    // ****************************************************************************

    /**
     * Reads the invitations of a user.
     * 
     * @param { TUserId_S } userId
     * 
     * @returns { Observable<void> }
     */
    public readCaretakerInvitations$(
        userId: TUserId_S,
    ): Observable<void> {
        throw new Error('readCaretakerInvitations not implemented');
    }

}
