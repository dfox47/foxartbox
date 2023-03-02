<template>
	<div class="content_inner">
		<div class="wrap">
			<h1>Table</h1>

			<div class="table_preview js-table-preview">
				<!-- base price -->
				<label class="hidden">
					<input class="js-table-price" type="checkbox" data-price="200" checked>
				</label>

				<!-- options from data -->
				<div v-for="tableOption in tableOptions" :key="tableOption.name" :class="'table_item js-table-item table_item__' + tableOption.name" :title="tableOption.title" :data-type="tableOption.name"></div>

				<div class="table_logo"></div>
			</div>

			<!-- Colors -->
			<div class="table_options">
				<div class="table_options__item">
					<div class="table_title">Table color:</div>

					<div class="table_color_list">
						<label class="checkbox_radio" v-for="tableColor in tableColors" :key="tableColor.title" @click="tableColorChanged(tableColor.title)" :title="tableColor.title">
							<input class="js-table-price" type="radio" :value="tableColor.title" name="table_color" :data-price="tableColor.price">
							<span :class="'table_color_item__' + tableColor.title"></span>
						</label>
					</div>
				</div>
			</div>

			<div class="table_options">
				<div class="table_options__item" v-for="tableOption in tableOptions" :key="tableOption.name">
					<label class="checkbox">
						<input class="js-table-option js-table-price" type="checkbox" :data-type="tableOption.name" :data-price="tableOption.price" @change="tablePrice(); tableItemSelected(tableOption.name)">
						<span class="checkbox__box"></span>

						<span class="checkbox__title">{{ tableOption.title }} <sup v-if="tableOption.price">(+{{ tableOption.price }}€)</sup></span>
					</label>

					<div class="table_question js-table-question" v-if="tableOption.desc" :data-type="tableOption.name">?</div>
				</div>
			</div>

			<div class="table_total">
				<span class="table_total__title">Total: </span> <span class="table_total__price js-table-price-total">0</span> <span class="table_total__currency">€</span>
			</div>
		</div>
	</div>
</template>

<script>
import {
	tableColorChanged,
	tableColorFromStorage,
	tableItemSelected,
	tablePrice
} from '../assets/js/table'

export default {
	created() {
		document.title = "Table | Foxartbox"
	},
	data() {
		return {
			tableColors: [
				{title: 'black',    price: 1},
				{title: 'pink',     price: 2},
				{title: 'white',    price: 3}
			],
			tableOptions: [
				{title: 'Whiteboard',       price: '10',    name: 'whiteboard',         desc: 'some text'},
				{title: 'Wireless charger', price: '10',    name: 'wireless_charger',   desc: ''},
				{title: 'Phone holder',     price: '',      name: 'phone_holder',       desc: ''},
				{title: 'Tablet holder',    price: '',      name: 'tablet_holder',      desc: ''}
			]
		}
	},
	methods: {
		tableColorChanged,
		tableItemSelected,
		tablePrice
	},
	mounted() {
		tableColorFromStorage()
	}
}
</script>