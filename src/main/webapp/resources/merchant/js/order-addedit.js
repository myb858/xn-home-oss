$(function() {
	var code = getQueryString('code');
	var view = getQueryString('v');
	var router = '/merchant/order';
	
	var fields = [{
		title: '发货单基本信息',
		type: 'title'
	}, {
		title: '编号',
		field: 'code1',
		'[value]': 'code',
		readonly: !!view
	}, {
		title: '下单用户',
		field: 'applyUser',
		readonly: !!view
	}, {
		title: '下单说明',
		field: 'applyNote',
		readonly: !!view
	}, {
		title: '下单时间',
		field: 'applyDatetime',
		formatter: dateTimeFormat,
		readonly: !!view
	}, {
		title: '发票信息',
		type: 'title'
	}, {
		title: '发票类型',
		field: 'receiptType',
		type: 'select',
		formatter: Dict.getNameForList('receipt_type'),
		key: 'receipt_type',
		readonly: !!view
	}, {
		title: '发票抬头',
		field: 'receiptTitle',
		readonly: !!view
	}, {
		title: '收货信息',
		type: 'title'
	}, {
		title: '收货人姓名',
		field: 'receiver',
		readonly: !!view
	}, {
		title: '联系电话',
		field: 'reMobile',
		readonly: !!view,
	}, {
		title: '收货地址',
		field: 'reAddress',
		readonly: !!view
	}];
	
	var options = {};
	if (view) {
		options.buttons = [{
			'title': '返回',
			handler: function() {
				goBack();
			}
		}];
	}
	buildDetail(router, fields, code, options);
});