/**
 * Copyright © Nadeem. All rights reserved.
 */

define([
    'underscore',
    'Magento_Ui/js/grid/columns/select'
], function (_, Column) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'Nadeem_OrderStatusColor/ui/grid/cells/text'
        },
        getOrderStatusColor: function (row) {
            if (row.status == 'pending') {
                return 'order-pending';
            } else if (row.status == 'processing') {
                return 'order-processing';
            } else if (row.status == 'complete') {
                return 'order-complete';
            } else if (row.status == 'closed' || row.status == 'canceled') {
                return 'order-closed';
            } else {
                return 'order-default';
            }
        }
    });
});
