import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  template: `
    <div class="col-lg-9 pt-2 pt-xl-3">
      <div
        data-filter-list="{&quot;searchClass&quot;: &quot;product-search&quot;, &quot;listClass&quot;: &quot;product-list&quot;, &quot;sortClass&quot;: &quot;product-sort&quot;, &quot;valueNames&quot;: [&quot;product&quot;, &quot;date&quot;, &quot;tendered&quot;, &quot;earning&quot;]}">

        <!-- Header -->
        <div class="d-md-flex align-items-center justify-content-between gap-3 pb-2 pb-sm-3 mb-md-2">
          <h1 class="h2 mb-md-0">Sales</h1>
          <div class="d-flex flex-column flex-sm-row gap-2 gap-sm-3">
            <div class="position-relative w-100">
              <i class="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input type="search" class="product-search form-control form-icon-start rounded-pill" placeholder="Search">
              <button
                class="btn btn-sm btn-outline-secondary w-auto border-0 p-1 position-absolute top-50 end-0 translate-middle-y me-2 opacity-0">
                <svg class="opacity-75" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M18.619 5.381a.875.875 0 0 1 0 1.238l-12 12A.875.875 0 0 1 5.38 17.38l12-12a.875.875 0 0 1 1.238 0Z"></path>
                  <path
                    d="M5.381 5.381a.875.875 0 0 1 1.238 0l12 12a.875.875 0 1 1-1.238 1.238l-12-12a.875.875 0 0 1 0-1.238Z"></path>
                </svg>
              </button>
            </div>
            <div class="position-relative" style="min-width: 190px">
              <i class="ci-calendar position-absolute top-50 start-0 translate-middle-y z-1 ms-3"></i>
              <div class="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true"
                   aria-expanded="false">
                <div class="form-select form-icon-start rounded-pill"><select
                  class="form-select form-icon-start rounded-pill choices__input" data-select="{
                      &quot;classNames&quot;: {
                        &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;form-icon-start&quot;, &quot;rounded-pill&quot;]
                      },
                      &quot;removeItemButton&quot;: false
                    }" aria-label="Period select" hidden="" tabindex="-1" data-choice="active">
                  <option value="Current" selected="">Current month</option>
                  <option value="Last month">Last month</option>
                  <option value="Last 3 months">Last 3 months</option>
                  <option value="Last 6 months">Last 6 months</option>
                  <option value="Last year">Last year</option>
                </select>
                  <div class="choices__list choices__list--single">
                    <div class="choices__item choices__item--selectable" data-item="" data-id="1" data-value="Current"
                         aria-selected="true" role="option">Current month
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Sales list (table) -->
        <table class="table align-middle fs-sm mb-0">
          <thead>
          <tr>
            <th class="ps-0" scope="col">
              <span class="fw-normal text-body">Product</span>
            </th>
            <th class="d-none d-md-table-cell" scope="col">
              <button type="button" class="btn fw-normal text-body product-sort p-0" data-sort="date">Date</button>
            </th>
            <th class="d-none d-md-table-cell" scope="col">
              <span class="fw-normal text-body">Status</span>
            </th>
            <th class="text-end d-none d-sm-table-cell" scope="col">
              <button type="button" class="btn fw-normal text-body product-sort p-0 me-n2" data-sort="tendered">Tendered
              </button>
            </th>
            <th class="text-end pe-0" scope="col">
              <button type="button" class="btn fw-normal text-body product-sort p-0 me-n2" data-sort="earning">Earning
              </button>
            </th>
          </tr>
          </thead>
          <tbody class="product-list">
          <tr>
            <td class="py-3 ps-0">
              <div class="d-flex align-items-start align-items-md-center hover-effect-scale position-relative">
                <div class="ratio bg-body-secondary rounded-2 overflow-hidden flex-shrink-0"
                     style="--cz-aspect-ratio: calc(52 / 66 * 100%); width: 66px">
                  <img src="assets/img/account/products/01.jpg" class="hover-effect-target" alt="Image">
                </div>
                <div class="ps-2 ms-1">
                  <span class="badge fs-xs text-info bg-info-subtle rounded-pill d-md-none mb-1">Pending</span>
                  <h6 class="product mb-1 mb-md-0">
                    <a class="fs-sm fw-medium hover-effect-underline stretched-link" href="shop-product-marketplace.html">Smart
                      watches series 9 mockup</a>
                  </h6>
                  <div class="fs-body-emphasis d-sm-none mb-1">$15.00</div>
                  <div class="fs-body-emphasis d-md-none">June 30, 2024</div>
                </div>
              </div>
            </td>
            <td class="d-none d-md-table-cell py-3">June 30, 2024<span class="date visually-hidden">1719745200</span></td>
            <td class="d-none d-md-table-cell py-3">
              <span class="badge fs-xs text-info bg-info-subtle rounded-pill">Pending</span>
            </td>
            <td class="tendered text-end d-none d-sm-table-cell py-3">$15.00</td>
            <td class="earning text-end py-3 pe-0">$11.25</td>
          </tr>

          </tbody>
        </table>

        <!-- Pagination -->
        <div class="d-flex align-items-center justify-content-between pt-4 gap-3">
          <div class="fs-sm">Showing <span class="fw-semibold">8</span> of <span class="fw-semibold">30</span><span
            class="d-none d-sm-inline"> results</span></div>
          <nav aria-label="Pagination">
            <ul class="pagination">
              <li class="page-item active" aria-current="page">
                      <span class="page-link">
                        1
                        <span class="visually-hidden">(current)</span>
                      </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">4</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  `,
  styles:``
})
export class Users {

}
