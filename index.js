module.exports = function brokerEverywhere(dispatch) {

    dispatch.hook('C_USE_ITEM', 1, event =>
    {
        if(event.item == 6550)
        {
            dispatch.toClient('S_NPC_MENU_SELECT', 1, {type:28})
            return false;
        }
    })
}
