<template>
	<div class="content_inner">
		<div class="wrap">
			<h1>Table</h1>

			<div class="table_top js-table-top">
				<!-- Base price -->
				<label class="hidden">
					<input class="js-table-price" type="checkbox" data-price="200" checked />
				</label>

				<!-- Whiteboard -->
				<div class="table_whiteboard js-table-checkbox-selector" title="Whiteboard" data-type="whiteboard"></div>

				<!-- Phone holder -->
				<div class="table_phone_holder js-table-checkbox-selector" title="phone holder" data-type="phone_holder"></div>

				<!-- Tablet holder -->
				<div class="table_tablet_holder js-table-checkbox-selector" title="tablet holder" data-type="tablet_holder"></div>

				<!-- Charger -->
				<div class="table_charger js-table-checkbox-selector" title="Hidden charger" data-type="charger"></div>

				<!-- Tablet coolers -->
				<div class="table_coolers js-table-checkbox-selector" data-type="coolers">
					<div class="table_cooler table_cooler__cooler_1" title="cooler 1"></div>

					<div class="table_cooler table_cooler__cooler_2" title="cooler 2"></div>

					<div class="table_grill"></div>
				</div>
			</div>

			<div class="table_options">
<!--				Color -->
				<div class="table_options__item">
					<h2>Table color:</h2>

					<div class="table_color_list">
						<label class="checkbox_radio">
							<input class="js-table-color" type="radio" value="1" name="table_color" data-color="#000" />
							<span class="table_color_item__black"></span>
						</label>

						<label class="checkbox_radio">
							<input class="js-table-color" type="radio" value="2" name="table_color" data-color="#ee0979" />
							<span class="table_color_item__pink"></span>
						</label>

						<label class="checkbox_radio">
							<input class="js-table-color" type="radio" value="3" name="table_color" data-color="#fff" />
							<span class="table_color_item__white"></span>
						</label>
					</div>
				</div>

<!--				Whiteboard -->
				<div class="table_options__item">
					<h2>Whiteboard</h2>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="whiteboard" data-price="10" />
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="whiteboard">?</div>
				</div>

<!--				Wireless charger -->
				<div class="table_options__item">
					<h2>Wireless charger</h2>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="charger" data-price="10" />
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="charger">?</div>
				</div>

<!--				Phone holder -->
				<div class="table_options__item">
					<h2>Phone holder</h2>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="phone_holder" data-price="5" />
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="phone_holder">?</div>
				</div>

<!--				Tablet holder -->
				<div class="table_options__item">
					<h2>Tablet holder</h2>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="tablet_holder" data-price="5" />
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="tablet_holder">?</div>
				</div>

<!--				Coolers -->
				<div class="table_options__item">
					<h2>Coolers</h2>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="coolers" data-price="25" />
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="coolers">?</div>
				</div>
			</div>

			<div class="table_total">
				<span class="table_total__title">Total: </span> <span class="table_total__price js-table-price-total">0</span> €
			</div>
		</div>
	</div>
</template>

<script>
// import About        from '@/components/About'

export default {
	created() {
		document.title = "Table | Foxartbox"
	}
}
</script>