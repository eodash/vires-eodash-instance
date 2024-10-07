
/**
 * @param { import("../types").VirEsSettings[string][string]} settings
 */
export const getChartDatasetCreator = (settings) => {
    const param = settings.info?.name ?? ""
    /**
     * Description placeholder
     *
     * @type {import("chart.js").ChartConfiguration<"scatter">}
     */
    const chartConfig = {
        type: "scatter",
        data: {
            datasets: [
                {
                    data: [],
                    pointBackgroundColor: (ctx) => {
                        const index = ctx.dataIndex;
                        //@ts-expect-error
                        if (!isNaN(settings.norms?.[index])) {
                            return settings.norms?.[index] ? settings.colormap.getColor(settings.norms?.[index]) : "#ffff"
                        } else {
                            const data = settings.chart?.configuration.data.datasets[0].data[index]

                            return settings.colormap.getColor(data?.y ?? 0)
                        }
                    },
                    borderColor: "transparent",
                    borderWidth: 0,
                }
            ],
        },
        options: {
            plugins: {
                zoom: {
                    zoom: {
                        pinch: {
                            enabled: true
                        },
                        wheel: {
                            enabled: true
                        },
                        mode: 'y'
                    },
                }
            },
            scales: {
                x: {
                    type: 'linear',
                    display: true,
                    title: {
                        display: true,
                        text: 'Date'
                    },
                    ticks: {
                        callback: (value, index, ticks) => new Date(value).toISOString()
                    }
                },
            }
        }
    }



    /**
     * Description placeholder
     *
     * @param {Record<string, number | number[] | string>} record
     * @param {import("../types").VirEsSettings[string][string]} settings
     */
    const createDateset_ = (record, settings) => {
        // to do: component values
        const value = typeof record[param] === "number" ? record[param] :
            //@ts-expect-error
            settings.norms?.[record["__index__"]]
        if (Number.isNaN(value)) {
            return
        }

        chartConfig.data.datasets[0].data.push({
            //@ts-expect-error
            x: Date.parse(record.Timestamp),
            y: value
        });

    }
    chartConfig.data.datasets[0].label = param ?? ""

    return { chartConfig, createDateset_ }

}
