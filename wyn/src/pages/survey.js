import React from 'react';

function Survey () {
    return (
    <div>
    <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">How much would you be willing to pay for this wine?</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>$10-$20</option>
            <option>$20-$30</option>
            <option>$30-$40</option>
            <option>$40-$50</option>
            <option>$50-$100</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Select the flavors you taste:</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Fruits</option>
            <option>Herbs</option>
            <option>Flowers</option>
            <option>Earth</option>
            <option>Grass</option>
            <option>Tobacco</option>
            <option>Butterscotch</option>
            <option>Vanilla</option>
            <option>Chocolate</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Any additional comments?</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </div>
    )
}

export default Survey;