var eventsPush = [];
var eventsPop = [];
class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */


constructor(config) {
eventsPop = [];
eventsPush = [];
	if(config === undefined)
	{		
        this.state = 'normal';
        throw new Error();	
	}	
  else
	{
    this.state = 'normal';
eventsPush.push(this.state);
	}

}

    /**
     * Returns active state.
     * @returns {String}
     */
getState() {

	return this.state;
}

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
eventsPop = [];
	var eventsArray = this.getStates();
	if(eventsArray.indexOf(state) >= 0 )
	{
		this.state = state;		
	}
	else
	{
		  throw new Error();
	}
}

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
eventsPop = [];
this.transitions = event;
if(this.transitions == 'study' && this.state == 'normal')
{	
	this.state = 'busy';

}
else if(this.transitions == 'get_tired' && this.state == 'busy')
{
	this.state = 'sleeping';

}
else if(this.transitions == 'get_hungry')
{
	this.state = 'hungry';
}
else if(this.transitions == 'eat' )
{
	this.state = 'normal';
}
eventsPush.push(this.state);
	
}

    /**
     * Resets FSM state to initial.
     */
    reset() {
    	this.state = 'normal';
}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
	var events = new Array("normal", "busy", "hungry" , "sleeping");
	if(event !== undefined)
		{			
			if(event == 'get_hungry')
			{
				var hungryEvents = new Array("busy", "sleeping");
				return hungryEvents;
			}	
			else if(event == 'study')
			{
				var studyEvents = new Array("normal");
				return studyEvents;
			}
			else
			{ 
				return new Array();
			}
		
		}
	else
		{	
			return events;
		}
}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
if(eventsPush.length > 1)
{
eventsPop.push(eventsPush.pop());
this.state = eventsPush.pop();  
	return true;
}
else if(eventsPush.length < 1)
{
 return false;
}
}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
if(eventsPop.length > 0)
{	
	this.state = eventsPop.pop();
return true;
}
else if(eventsPop.length === 0)
{
	return false;
}
}

    /**
     * Clears transition history
     */
    clearHistory() {
	eventsPush = [];
	eventsPop = [];
}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
