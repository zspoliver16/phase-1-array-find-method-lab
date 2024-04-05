

  function superbowlWin(collection) {
    const found = collection.find((Obj) => Obj.result === "W");
    if(found) {
        return found.year
    }
  }
