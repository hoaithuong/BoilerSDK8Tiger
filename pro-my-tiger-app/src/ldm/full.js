/* tslint:disable:file-header */

/* tslint:disable:variable-name */

/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-06-30T10:42:49.498Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Continent
 * Display Form ID: attr.countries.continent
 */

export const Continent = newAttribute("countries.continent");
export const Country = {
    /**
     * Display Form Title: Country
     * Display Form ID: countries.country
     */
    Default: newAttribute("countries.country"),
    /**
     * Display Form Title: Geo  country location
     * Display Form ID: countries.geo__country_location
     */
    GeoCountryLocation: newAttribute("countries.geo__country_location"),
};
/**
 * Attribute Title: Region
 * Display Form ID: attr.countries.region
 */

export const Region = newAttribute("countries.region");
/**
 * Attribute Title: City
 * Display Form ID: attr.sightings.city
 */

export const City = newAttribute("sightings.city");
/**
 * Attribute Title: Comments
 * Display Form ID: attr.sightings.comments
 */

export const Comments = newAttribute("sightings.comments");
/**
 * Attribute Title: Decade
 * Display Form ID: attr.sightings.decade
 */

export const Decade = newAttribute("sightings.decade");
/**
 * Attribute Title: Duration human
 * Display Form ID: attr.sightings.duration_human
 */

export const DurationHuman = newAttribute("sightings.duration_human");
/**
 * Attribute Title: Pk
 * Display Form ID: attr.sightings.pk
 */

export const Pk = newAttribute("sightings.pk");
/**
 * Attribute Title: Shape
 * Display Form ID: attr.sightings.shape
 */

export const Shape = newAttribute("sightings.shape");
/**
 * Attribute Title: State
 * Display Form ID: attr.sightings.state
 */

export const State = newAttribute("sightings.state");
/**
 * Fact Title: Death rate
 * Fact ID: countries.death_rate
 */

export const DeathRate = {
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Death rate
     * Fact ID: countries.death_rate
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.death_rate", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Deaths
 * Fact ID: countries.deaths
 */

export const Deaths = {
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Deaths
     * Fact ID: countries.deaths
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.deaths", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Gdp
 * Fact ID: countries.gdp
 */

export const Gdp = {
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Gdp
     * Fact ID: countries.gdp
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.gdp", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Phones per 1k
 * Fact ID: countries.phones_per_1k
 */

export const PhonesPer1k = {
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Phones per 1k
     * Fact ID: countries.phones_per_1k
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.phones_per_1k", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Pop density
 * Fact ID: countries.pop_density
 */

export const PopDensity = {
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Pop density
     * Fact ID: countries.pop_density
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.pop_density", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Population
 * Fact ID: countries.population
 */

export const Population = {
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Population
     * Fact ID: countries.population
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("countries.population", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Duration
 * Fact ID: sightings.duration
 */

export const Duration = {
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Duration
     * Fact ID: sightings.duration
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("sightings.duration", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Duration minutes
 * Fact ID: sightings.duration_minutes
 */

export const DurationMinutes = {
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Duration minutes
     * Fact ID: sightings.duration_minutes
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("sightings.duration_minutes", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: Event date - Date
 * Display Form ID: event_date.day
 */

export const EventDateDate = newAttribute("event_date.day");
/**
 * Attribute Title: Event date - Month/Year
 * Display Form ID: event_date.month
 */

export const EventDateMonthYear = newAttribute("event_date.month");
/**
 * Attribute Title: Event date - Quarter/Year
 * Display Form ID: event_date.quarter
 */

export const EventDateQuarterYear = newAttribute("event_date.quarter");
/**
 * Attribute Title: Event date - Week/Year
 * Display Form ID: event_date.week
 */

export const EventDateWeekYear = newAttribute("event_date.week");
/**
 * Attribute Title: Event date - Year
 * Display Form ID: event_date.year
 */

export const EventDateYear = newAttribute("event_date.year");
/**
 * Attribute Title: Posted date - Date
 * Display Form ID: posted_date.day
 */

export const PostedDateDate = newAttribute("posted_date.day");
/**
 * Attribute Title: Posted date - Month/Year
 * Display Form ID: posted_date.month
 */

export const PostedDateMonthYear = newAttribute("posted_date.month");
/**
 * Attribute Title: Posted date - Quarter/Year
 * Display Form ID: posted_date.quarter
 */

export const PostedDateQuarterYear = newAttribute("posted_date.quarter");
/**
 * Attribute Title: Posted date - Week/Year
 * Display Form ID: posted_date.week
 */

export const PostedDateWeekYear = newAttribute("posted_date.week");
/**
 * Attribute Title: Posted date - Year
 * Display Form ID: posted_date.year
 */

export const PostedDateYear = newAttribute("posted_date.year");
export const Insights = {
    Thgchart: "a355fde9-01ae-480d-8bb6-cfe2432c7c91",
};
