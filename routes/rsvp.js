var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

/*
 * POST
 */
 exports.addRSVP = function(req, res){
   console.log(rsvpEmail);

   data.rsvp.push(rsvpEmail); // Add to current data

   // Lets send our task name back so out browser knows it worked out!
   res.send(rsvpEmail)
 };
