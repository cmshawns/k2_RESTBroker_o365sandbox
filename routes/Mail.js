

/*
 * GET /Mail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * top(type: integer) - query parameter - Specify the number of emails to be fetched by this action. Example: If Top is '10', the top 10 emails are fetched. The default value is 10.
 * skip(type: integer) - query parameter - Specify the number of emails to be skipped by this action. Example: If skip is '10' and there are 30 emails in total, the emails from 10-20 are fetched. The default value is 0.
 * folder(type: string) - query parameter - Name of the folder that contains the messages
 * fetchOnlyUnreadMails(type: boolean) - query parameter - Option to fetch only unread messages
 */
exports.getMail = function(req, res){
    res.status(401);
    
    // set response body and send
    res.json({
        "status": 401,
      "source": "https://office365connectore156033a80874fd393840c25c6e86b2e.azurewebsites.net/Mail",
      "message": "Access Token is invalid or expired. You may need to authorize your connector again."
    
    });
};

/*
 * POST /Mail
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postMail = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /Mail
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * messageId(type: string) - query parameter - The ID of the message to delete
 */
exports.deleteMail = function(req, res) {
	req.checkQuery('messageId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /Mail/MarkAsRead
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * messageId(type: string) - query parameter - Message id of the message that needs to be marked as read
 */
exports.postMailMarkasread = function(req, res) {
	req.checkQuery('messageId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /Mail/ReplyTo
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * messageId(type: string) - query parameter - The ID of the message to reply to
 * replyAll(type: boolean) - query parameter - Option to just reply to sender or reply to all recipients
 */
exports.postMailReplyto = function(req, res) {
	req.checkQuery('messageId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /Mail/Poll
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * triggerState(type: string) - query parameter -
 * folder(type: string) - query parameter - Specify the folder name to trigger the workflow only when mail is received in the specified folder.
 * to(type: string) - query parameter - Specify the 'To' email id to trigger the workflow only when the mail is sent to the specified email id.
 * from(type: string) - query parameter - Specify the 'From' email id to trigger the workflow only when the mail is received from the specified email id.
 * importance(type: string) - query parameter - Importance of the received email (“High", "Normal", “Low”).
 */
exports.getMailPoll = function(req, res) {
	req.checkQuery('triggerState', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};