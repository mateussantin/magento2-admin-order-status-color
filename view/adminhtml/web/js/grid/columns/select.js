/**
 * Copyright © Mateus, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore',
    'Magento_Ui/js/grid/columns/select'
], function(_, Column) {
    'use strict';

    return Column.extend({
        defaults: {
            bodyTmpl: 'Mateus_OrderStatusColor/ui/grid/cells/text'
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
