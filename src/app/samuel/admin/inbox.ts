import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  imports: [],
  template: `
    <div class="col-  mb-3 mb-lg-5">
      <!-- Card -->
      <div class="card h-100">
        <!-- Header -->
        <div class="card-header card-header-content-between">
          <h4 class="card-header-title">Latest transactions</h4>

        </div>
        <!-- End Header -->

        <!-- Body -->
        <div class="card-body card-body-height">
          <ul class="list-group list-group-flush list-group-no-gutters">
            <!-- List Item -->
            <li class="list-group-item">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <div class="avatar avatar-sm avatar-soft-dark avatar-circle">
                    <span class="avatar-initials ">R</span>
                  </div>
                </div>

                <div class="flex-grow-1 ms-3">
                  <div class="row">
                    <div class="col-7 col-md-5 order-md-1">
                      <h5 class="mb-0">Slack</h5>
                      <span class="fs-6 text-body">Subscription payment</span>
                    </div>

                    <div class="col-5 col-md-4 order-md-3 text-end mt-2 mt-md-0">
                      <h5 class="mb-0">-$11.00 USD</h5>
                      <span class="fs-6 text-body">12 May, 2020</span>
                    </div>

                    <div class="col-auto col-md-3 order-md-2">
                      <span class="badge bg-soft-success text-success rounded-pill">Completed</span>
                    </div>
                  </div>
                  <!-- End Row -->
                </div>
              </div>
            </li>

          </ul>
        </div>
        <!-- End Body -->
      </div>
      <!-- End Card -->
    </div>
    <div class="col-lg-9">
      <div class="ps-lg-3 ps-xl-0">

        <!-- Page title -->
        <h1 class="h2 mb-1 mb-sm-2">Addresses</h1>

        <!-- Primary shipping address -->
        <div class="border-bottom py-4">
          <div class="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
            <div class="d-flex align-items-center gap-3 me-4">
              <h2 class="h6 mb-0">Shipping address</h2>
              <span class="badge text-bg-info rounded-pill">Primary</span>
            </div>
            <a class="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href=".primary-address" data-bs-toggle="collapse" aria-expanded="false" aria-controls="primaryAddressPreview primaryAddressEdit">Edit</a>
          </div>
          <div class="collapse primary-address show" id="primaryAddressPreview">
            <ul class="list-unstyled fs-sm m-0">
              <li>New York 11741, USA</li>
              <li>396 Lillian Bolavandy, Holbrook</li>
            </ul>
          </div>
          <div class="collapse primary-address" id="primaryAddressEdit">
            <form class="row g-3 g-sm-4 needs-validation" novalidate="">
              <div class="col-sm-6">
                <div class="position-relative">
                  <label class="form-label">Country</label>
                  <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="form-select"><select class="form-select choices__input" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select country" required="" hidden="" tabindex="-1" data-choice="active">
                    <option value="">Select country...</option>
                    <optgroup label="Africa">
                      <option value="Nigeria">Nigeria</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Ethiopia">Ethiopia</option>
                    </optgroup>
                    <optgroup label="Asia">
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                    </optgroup>
                    <optgroup label="Europe">
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                    </optgroup>
                    <optgroup label="North America">
                      <option value="United States" selected="">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Costa Rica">Costa Rica</option>
                    </optgroup>
                    <optgroup label="South America">
                      <option value="Brazil">Brazil</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Chile">Chile</option>
                      <option value="Peru">Peru</option>
                    </optgroup>
                    <optgroup label="Oceania">
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                    </optgroup>
                  </select><div class="choices__list choices__list--single" role="listbox"><div class="choices__item choices__item--selectable" data-item="" data-id="17" data-value="United States" aria-selected="true" role="option" data-deletable="">United States<button type="button" class="choices__button" aria-label="Remove item: United States" data-button="">Remove item</button></div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" class="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Select country..." placeholder="Search..."><div class="choices__list" role="listbox"><div id="choices--13on-item-choice-1" class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-choice-selectable="" aria-selected="true">Select country...</div><div class="choices__group" role="group" data-group="" data-id="1" data-value="Africa"><div class="choices__heading">Africa</div></div><div id="choices--13on-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="2" data-value="Nigeria" data-group-id="1" data-choice-selectable="">Nigeria</div><div id="choices--13on-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="3" data-value="South Africa" data-group-id="1" data-choice-selectable="">South Africa</div><div id="choices--13on-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="4" data-value="Kenya" data-group-id="1" data-choice-selectable="">Kenya</div><div id="choices--13on-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="5" data-value="Egypt" data-group-id="1" data-choice-selectable="">Egypt</div><div id="choices--13on-item-choice-6" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="6" data-value="Ethiopia" data-group-id="1" data-choice-selectable="">Ethiopia</div><div class="choices__group" role="group" data-group="" data-id="2" data-value="Asia"><div class="choices__heading">Asia</div></div><div id="choices--13on-item-choice-7" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="7" data-value="China" data-group-id="2" data-choice-selectable="">China</div><div id="choices--13on-item-choice-8" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="8" data-value="India" data-group-id="2" data-choice-selectable="">India</div><div id="choices--13on-item-choice-9" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="9" data-value="Japan" data-group-id="2" data-choice-selectable="">Japan</div><div id="choices--13on-item-choice-10" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="10" data-value="South Korea" data-group-id="2" data-choice-selectable="">South Korea</div><div id="choices--13on-item-choice-11" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="11" data-value="Saudi Arabia" data-group-id="2" data-choice-selectable="">Saudi Arabia</div><div class="choices__group" role="group" data-group="" data-id="3" data-value="Europe"><div class="choices__heading">Europe</div></div><div id="choices--13on-item-choice-12" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="12" data-value="Germany" data-group-id="3" data-choice-selectable="">Germany</div><div id="choices--13on-item-choice-13" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="13" data-value="France" data-group-id="3" data-choice-selectable="">France</div><div id="choices--13on-item-choice-14" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="14" data-value="United Kingdom" data-group-id="3" data-choice-selectable="">United Kingdom</div><div id="choices--13on-item-choice-15" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="15" data-value="Italy" data-group-id="3" data-choice-selectable="">Italy</div><div id="choices--13on-item-choice-16" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="16" data-value="Spain" data-group-id="3" data-choice-selectable="">Spain</div><div class="choices__group" role="group" data-group="" data-id="4" data-value="North America"><div class="choices__heading">North America</div></div><div id="choices--13on-item-choice-17" class="choices__item choices__item--choice is-selected choices__item--selectable" role="treeitem" data-choice="" data-id="17" data-value="United States" data-group-id="4" data-choice-selectable="">United States</div><div id="choices--13on-item-choice-18" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="18" data-value="Canada" data-group-id="4" data-choice-selectable="">Canada</div><div id="choices--13on-item-choice-19" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="19" data-value="Mexico" data-group-id="4" data-choice-selectable="">Mexico</div><div id="choices--13on-item-choice-20" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="20" data-value="Jamaica" data-group-id="4" data-choice-selectable="">Jamaica</div><div id="choices--13on-item-choice-21" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="21" data-value="Costa Rica" data-group-id="4" data-choice-selectable="">Costa Rica</div><div class="choices__group" role="group" data-group="" data-id="5" data-value="South America"><div class="choices__heading">South America</div></div><div id="choices--13on-item-choice-22" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="22" data-value="Brazil" data-group-id="5" data-choice-selectable="">Brazil</div><div id="choices--13on-item-choice-23" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="23" data-value="Argentina" data-group-id="5" data-choice-selectable="">Argentina</div><div id="choices--13on-item-choice-24" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="24" data-value="Colombia" data-group-id="5" data-choice-selectable="">Colombia</div><div id="choices--13on-item-choice-25" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="25" data-value="Chile" data-group-id="5" data-choice-selectable="">Chile</div><div id="choices--13on-item-choice-26" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="26" data-value="Peru" data-group-id="5" data-choice-selectable="">Peru</div><div class="choices__group" role="group" data-group="" data-id="6" data-value="Oceania"><div class="choices__heading">Oceania</div></div><div id="choices--13on-item-choice-27" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="27" data-value="Australia" data-group-id="6" data-choice-selectable="">Australia</div><div id="choices--13on-item-choice-28" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="28" data-value="New Zealand" data-group-id="6" data-choice-selectable="">New Zealand</div><div id="choices--13on-item-choice-29" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="29" data-value="Papua New Guinea" data-group-id="6" data-choice-selectable="">Papua New Guinea</div><div id="choices--13on-item-choice-30" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="30" data-value="Fiji" data-group-id="6" data-choice-selectable="">Fiji</div><div id="choices--13on-item-choice-31" class="choices__item choices__item--choice choices__item--selectable" role="treeitem" data-choice="" data-id="31" data-value="Solomon Islands" data-group-id="6" data-choice-selectable="">Solomon Islands</div></div></div></div>
                  <div class="invalid-feedback">Please select your country!</div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="position-relative">
                  <label class="form-label">City</label>
                  <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"><div class="form-select"><select class="form-select choices__input" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Select city" required="" hidden="" tabindex="-1" data-choice="active">
                    <option value="">Select city...</option>
                    <option value="Austin">Austin</option>
                    <option value="Charlotte">Charlotte</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Columbus">Columbus</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Houston">Houston</option>
                    <option value="Jacksonville">Jacksonville</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York" selected="">New York</option>
                    <option value="Orlando">Orlando</option>
                    <option value="Philadelphia">Philadelphia</option>
                    <option value="Phoenix">Phoenix</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="San Diego">San Diego</option>
                    <option value="San Jose">San Jose</option>
                  </select><div class="choices__list choices__list--single" role="listbox"><div class="choices__item choices__item--selectable" data-item="" data-id="10" data-value="New York" aria-selected="true" role="option" data-deletable="">New York<button type="button" class="choices__button" aria-label="Remove item: New York" data-button="">Remove item</button></div></div></div><div class="choices__list choices__list--dropdown" aria-expanded="false"><input type="search" class="choices__input choices__input--cloned" autocomplete="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" aria-label="Select city..." placeholder="Search..."><div class="choices__list" role="listbox"><div id="choices--de8v-item-choice-1" class="choices__item choices__item--choice choices__placeholder choices__item--selectable is-highlighted" role="option" data-choice="" data-id="1" data-value="" data-choice-selectable="" aria-selected="true">Select city...</div><div id="choices--de8v-item-choice-2" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="2" data-value="Austin" data-choice-selectable="">Austin</div><div id="choices--de8v-item-choice-3" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="3" data-value="Charlotte" data-choice-selectable="">Charlotte</div><div id="choices--de8v-item-choice-4" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="4" data-value="Chicago" data-choice-selectable="">Chicago</div><div id="choices--de8v-item-choice-5" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="5" data-value="Columbus" data-choice-selectable="">Columbus</div><div id="choices--de8v-item-choice-6" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="6" data-value="Dallas" data-choice-selectable="">Dallas</div><div id="choices--de8v-item-choice-7" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="7" data-value="Houston" data-choice-selectable="">Houston</div><div id="choices--de8v-item-choice-8" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="8" data-value="Jacksonville" data-choice-selectable="">Jacksonville</div><div id="choices--de8v-item-choice-9" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="9" data-value="Los Angeles" data-choice-selectable="">Los Angeles</div><div id="choices--de8v-item-choice-10" class="choices__item choices__item--choice is-selected choices__item--selectable" role="option" data-choice="" data-id="10" data-value="New York" data-choice-selectable="">New York</div><div id="choices--de8v-item-choice-11" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="11" data-value="Orlando" data-choice-selectable="">Orlando</div><div id="choices--de8v-item-choice-12" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="12" data-value="Philadelphia" data-choice-selectable="">Philadelphia</div><div id="choices--de8v-item-choice-13" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="13" data-value="Phoenix" data-choice-selectable="">Phoenix</div><div id="choices--de8v-item-choice-14" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="14" data-value="San Antonio" data-choice-selectable="">San Antonio</div><div id="choices--de8v-item-choice-15" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="15" data-value="San Diego" data-choice-selectable="">San Diego</div><div id="choices--de8v-item-choice-16" class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice="" data-id="16" data-value="San Jose" data-choice-selectable="">San Jose</div></div></div></div>
                  <div class="invalid-feedback">Please select your city!</div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="position-relative">
                  <label for="psa-zip" class="form-label">ZIP code</label>
                  <input type="text" class="form-control" id="psa-zip" value="11741" required="">
                  <div class="invalid-feedback">Please enter your ZIP code!</div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="position-relative">
                  <label for="psa-address" class="form-label">Address</label>
                  <input type="text" class="form-control" id="psa-address" value="396 Lillian Bolavandy, Holbrook" required="">
                  <div class="invalid-feedback">Please enter your address!</div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-check mb-0">
                  <input type="checkbox" class="form-check-input" id="set-primary-1" checked="">
                  <label for="set-primary-1" class="form-check-label">Set as primary address</label>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex gap-3 pt-2 pt-sm-0">
                  <button type="submit" class="btn btn-primary">Save changes</button>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="collapse" data-bs-target=".primary-address" aria-expanded="true" aria-controls="primaryAddressPreview primaryAddressEdit">Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Alternative shipping address -->

        <!-- Add address button -->
        <div class="nav pt-4">
          <a class="nav-link animate-underline fs-base px-0" href="#newAddressModal" data-bs-toggle="modal">
            <i class="ci-plus fs-lg ms-n1 me-2"></i>
            <span class="animate-target">Add address</span>
          </a>
        </div>
      </div>
    </div>

  `,
  styles:``
})
export class Inbox {

}
