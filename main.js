
/*
 * Office365Connector
 *
 * 
 */


var Mail = require("./routes/Mail.js")
var Contacts = require("./routes/Contacts.js")
var Calendar = require("./routes/Calendar.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/Mail", "GET", Mail.getMail);
Sandbox.define("/Mail", "POST", Mail.postMail);
Sandbox.define("/Mail", "DELETE", Mail.deleteMail);
Sandbox.define("/Mail/MarkAsRead", "POST", Mail.postMailMarkasread);
Sandbox.define("/Mail/ReplyTo", "POST", Mail.postMailReplyto);
Sandbox.define("/Mail/Poll", "GET", Mail.getMailPoll);
Sandbox.define("/Contacts", "GET", Contacts.getContacts);
Sandbox.define("/Contacts", "PUT", Contacts.putContacts);
Sandbox.define("/Contacts", "POST", Contacts.postContacts);
Sandbox.define("/Contacts", "DELETE", Contacts.deleteContacts);
Sandbox.define("/Calendar", "GET", Calendar.getCalendar);
Sandbox.define("/Calendar", "PUT", Calendar.putCalendar);
Sandbox.define("/Calendar", "POST", Calendar.postCalendar);
Sandbox.define("/Calendar", "DELETE", Calendar.deleteCalendar);