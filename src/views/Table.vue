<template>
	<div class="content_inner">
		<div class="wrap">
			<h1>Table</h1>

			<div class="table_top js-table-preview">
				<!-- Base price -->
				<label class="hidden">
					<input class="js-table-price" type="checkbox" data-price="200" checked>
				</label>

				<!-- Whiteboard -->
				<div class="table_whiteboard js-table-checkbox-selector" title="Whiteboard" data-type="whiteboard"></div>

				<!-- Phone holder -->
				<div class="table_phone_holder js-table-checkbox-selector" title="phone holder" data-type="phone_holder"></div>

				<!-- Tablet holder -->
				<div class="table_tablet_holder js-table-checkbox-selector" title="tablet holder" data-type="tablet_holder"></div>

				<!-- Charger -->
				<div class="table_charger js-table-checkbox-selector" title="Hidden charger" data-type="charger"></div>
			</div>

			<div class="table_options">
				<!-- Color -->
				<div class="table_options__item">
					<div class="table_title">Table color:</div>

					<div class="table_color_list">
						<label class="checkbox_radio" v-for="tableColor in tableColors" :key="tableColor.title" @click="tableColorChanged()" :title="tableColor.title">
							<input class="js-table-color js-table-price" type="radio" :value="tableColor.title" name="table_color" :data-color="tableColor.color" :data-price="tableColor.price">
							<span :class="'table_color_item__' + tableColor.title"></span>
						</label>
					</div>
				</div>

				<!-- Whiteboard -->
				<div class="table_options__item">
					<div class="table_title">Whiteboard</div>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="whiteboard" data-price="10" @change="tablePrice()">
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="whiteboard">?</div>
				</div>

				<!-- Wireless charger -->
				<div class="table_options__item">
					<div>Wireless charger</div>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="charger" data-price="10" @change="tablePrice()">
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="charger">?</div>
				</div>

				<!-- Phone holder -->
				<div class="table_options__item">
					<div class="table_title">Phone holder</div>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="phone_holder" data-price="5" @change="tablePrice()">
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="phone_holder">?</div>
				</div>

				<!-- Tablet holder -->
				<div class="table_options__item">
					<div class="table_title">Tablet holder</div>

					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="tablet_holder" data-price="5" @change="tablePrice()">
						<span></span>
					</label>

					<div class="table_question js-table-question" data-type="tablet_holder">?</div>
				</div>
			</div>

			<div class="table_total">
				<span class="table_total__title">Total: </span> <span class="table_total__price js-table-price-total">0</span> €
			</div>
		</div>
	</div>
</template>

<script>
import {tableColorChanged, tableColorFromStorage, tablePrice} from '../assets/js/table'

export default {
	created() {
		document.title = "Table | Foxartbox"
	},
	data() {
		return {
			tableColors: [
				{title: 'black',    color: '#000',      price: 1},
				{title: 'pink',     color: '#ee0979',   price: 2},
				{title: 'white',    color: '#fff',      price: 3}
			],
		}
	},
	methods: {
		tableColorChanged,
		tablePrice
	},
	mounted() {
		tableColorChanged()
		tableColorFromStorage()
	}
}
</script>