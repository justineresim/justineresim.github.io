<form>
	<div class="g-filter-section g-search">
		<div class="g-form-group g-sm g-hidden-labels">
			<div class="g-input-btn">
				<label for="search">Search</label>
				<input type="text" class="g-form-control" id="search" placeholder="Search by make, model, assets name...">
				<a class="g-btn g-btn-icon"><span class="icon-search"></span></a>
			</div>
		</div>
	</div>
	<div class="g-filter-section g-filters">
		<div class="line">
			<div class="unit size1of1">
				<a class="g-pull-right"><span class="icon-save"></span> <b>Save Search</b></a>
				<a class="g-btn-secondary g-sm">Circle <span class="icon-close"></span></a>
				<a class="g-btn-secondary g-sm">Status <span class="icon-close"></span></a>
				<a class="g-btn-secondary g-sm">Asset Health <span class="icon-close"></span></a>
				<a class="g-btn-secondary g-sm">Location <span class="icon-close"></span></a>
				<a class="g-btn-secondary g-sm">Status <span class="icon-close"></span></a>
			</div>
		</div>
	</div>
	<div class="g-filter-section g-filter-results">
		<div class="line">
			<div class="unit size2of3 sm-size1of3 xs-size1of3">
				<p class="g-assets">4 assets</p>
			</div>
			<div class="g-form-group unit size1of3 sm-size2of3 xs-size2of3 g-hidden-labels g-inline-form g-text-right g-lg-hidden">
				<label>Sort By:</label>
				<select class="g-form-control">
					<option>Sort By:</option>
					<option value="1">Distance</option>
					<option value="2">Health</option>
				</select>
				<div class="g-btn-toggle g-asset-map-list-toggle">
	                <a class="g-btn-tertiary g-btn-icon"><span class="icon-pin"></span></a>
	                <a class="g-btn-tertiary g-btn-icon g-active"><span class="icon-list"></span></a>
	            </div>
			</div>
			<div class="g-form-group unit size1of3 g-hidden-labels g-sm-hidden g-xs-hidden">
				<label>Sort By:</label>
				<select class="g-form-control">
					<option>Sort By:</option>
					<option value="1">Distance</option>
					<option value="2">Health</option>
				</select>
			</div>
		</div>
		<div class="g-results-map-view" style="background: url('./img/map.jpg') center center; background-size: cover">

		</div>
		<div class="g-results-container">
			<div class="g-result">
				<div class="g-result-img">
					<img class="g-asset-img" src="./img/asset.png">
				</div>
				<div class="g-result-text">
					<span class="icon-circle g-color-normal"></span>
					<span class="g-result-number">10180742</span>
					<br>
					<span class="g-result-details"><span class="g-xs-hidden">Make and Model: </span>Cat PD12000</span>
				</div>
				<div class="g-result-icons">
					<span class="icon-maintenance g-color-alert"></span>
					<a class="toggleFav"><span class="icon-fav g-color-fav"></span></a>
				</div>
			</div>
			<div class="g-result g-active">
				<div class="g-result-img">
					<img src="./img/asset.png">
				</div>
				<div class="g-result-text">
					<span class="icon-circle g-color-normal"></span>
					<span class="g-result-number">29847298</span>
					<br>
					<span class="g-result-details"><span class="g-xs-hidden">Make and Model: </span>Mitsubishi FD50N</span>
				</div>
				<div class="g-result-icons">
					<a class="toggleFav"><span class="icon-unfave"></span></a>
				</div>
			</div>
			<div class="g-result">
				<div class="g-result-img">
					<img src="./img/asset.png">
				</div>
				<div class="g-result-text">
					<span class="icon-circle g-color-alert"></span>
					<span class="g-result-number">29847298</span>
					<br>
					<span class="g-result-details"><span class="g-xs-hidden">Model: </span>TGR400</span>
				</div>
				<div class="g-result-icons">
					<span class="g-color-alert icon-alert"></span>
					<a class="toggleFav"><span class="icon-unfave"></span></a>
				</div>
			</div>
			<div class="g-result">
				<div class="g-result-img">
					<img src="./img/asset.png">
				</div>
				<div class="g-result-text">
					<span class="icon-circle g-color-warning"></span>
					<span class="g-result-number">29847298</span>
					<br>
					<span class="g-result-details"><span class="g-xs-hidden">Make and Model: </span>NGE Gensets</span>
				</div>
				<div class="g-result-icons">
					<span class="g-color-warning icon-alert"></span>
					<a class="toggleFav"><span class="icon-unfave"></span></a>
				</div>
			</div>
		</div>
	</div>
</form>