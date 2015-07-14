

/*
 * GET /Contacts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * top(type: integer) - query parameter - Specify the number of events to be fetched by this action. Example: If Top is '10', the top 10 events are fetched.
 * skip(type: integer) - query parameter - Specify the number of events to be skipped by this action. Example: If skip is '10' and there are 30 events in total, the evens from 10-20 are fetched.
 * surname(type: string) - query parameter - Specify the last name of the person to filter.
 * givenName(type: string) - query parameter - Specify the first name of the person to filter.
 * companyName(type: string) - query parameter - Specify the company name to filter.
 */
exports.getContacts = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /Contacts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * contactId(type: string) - query parameter - The ID of the contact to update
 */
exports.putContacts = function(req, res) {
	req.checkQuery('contactId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /Contacts
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postContacts = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /Contacts
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * contactId(type: string) - query parameter - The ID of the contact to delete
 */
exports.deleteContacts = function(req, res) {
	req.checkQuery('contactId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};