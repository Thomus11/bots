
on the APP I have different functions
1 Adding a Bot to the Army
     it hecks if the bot is already in the army and if not it adds it to the army

2 Removing a Bot from the Army
     the filter removes the bot from the array based on its id  

 3 Deleting the bot
      this sends a delete to remove the bot from the backend
       and the bot also disappears from the UI
       (updates the bots state to exclude the deleted bot)

  4 SORT
      this function sort the bots based on a given   condtion eg health, damage, armor
      and in a descending order and updates the bots state.

   4 Filtering Bots 
       if All is selected it refetches all the bots again from the API
       otherwise it will filter based on the class
       and filtering does not permanently the bots
    
    5 COMPONENTES
       Fetch bots:	    useEffect + fetch("API_URL")
       Display bots:	<BotCollection bots={bots} />
       Add bot to army:	addToArmy(bot) (only adds once)
       Remove from army:	removeFromArmy(bot)
       Delete bot:	handleDelete(bot) → fetch(DELETE)
       Sort bots:	handleSort(condition)
       Filter bots:	handleFilter(botClass)
       Navigation:	React Router <Routes>

         