<template>
	<div class="content_inner">
		<div class="wrap">
			<h1>Table</h1>

			<div class="table_preview js-table-preview">
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

				<div class="table_logo"></div>
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
			</div>

			<div class="table_options">
				<div class="table_options__item" v-for="tableOption in tableOptions" :key="tableOption.name">
					<label class="checkbox">
						<input class="js-table-checkbox js-table-price" type="checkbox" data-type="tablet_holder" :data-price="tableOption.price" @change="tablePrice()">
						<span class="checkbox__box"></span>

						<span class="checkbox__title">{{ tableOption.title }} <sup>(+{{ tableOption.price }}€)</sup></span>
					</label>

					<div class="table_question js-table-question" :data-type="tableOption.name">?</div>
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
			tableOptions: [
				{title: 'Whiteboard',       price: '10',    name: 'whiteboard',         desc: ''},
				{title: 'Wireless charger', price: '10',    name: 'wireless_charger',   desc: ''},
				{title: 'Phone holder',     price: '5',     name: 'phone_holder',       desc: ''},
				{title: 'Tablet holder',    price: '5',     name: 'tablet_holder',      desc: ''}
			]
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