

/*
 * GET /Calendar
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * top(type: integer) - query parameter - Specify the number of events to be fetched by this action. Example: If Top is '10', the top 10 events are fetched.
 * skip(type: integer) - query parameter - Specify the number of events to be skipped by this action. Example: If skip is '10' and there are 30 events in total, the evens from 10-20 are fetched.
 * minutesBefore(type: integer) - query parameter - Before time in minutes to consider while filtering the calendar events
 * minutesAfter(type: integer) - query parameter - After time in minutes to consider while filtering the calendar events
 */
exports.getCalendar = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /Calendar
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * eventId(type: string) - query parameter - The ID of the message to update
 */
exports.putCalendar = function(req, res) {
	req.checkQuery('eventId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /Calendar
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postCalendar = function(req, res) {
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * DELETE /Calendar
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * eventId(type: string) - query parameter - Specify the unique id of the event.
 */
exports.deleteCalendar = function(req, res) {
	req.checkQuery('eventId', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};