import React from "react";
import './SearchBar.css'
export default function SearchBar() {
  return (
    <div>
      <div class="search-bar">
        <input type="text" placeholder="Search..." />
        <button>
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
