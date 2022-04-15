const mongoose = require("mongoose");

/* var KineticsSchema = new mongoose.Schema({
    ec_number : String,
    substrate : String,
    value : String,
    parameters :  String,
    uniprot :  String,
    organism  :  String,
    reaction :  String,
    pubmed :  String,
    commentary :  String,
    temperature :  String,
    pH :  String,
    variant_kinetics :  String,
    unit :  String,
    source :  String,
    ec_1 :  String,
    ec_2 :  String,
    ec_3 :  String,
    ec_4 :  String,
    mutation_class :  String,
    mutation_kcat_desc :  String
});
 */

var KineticsTableSchema = new mongoose.Schema({
    ec_number: String,
    uniprot: String,
    organism: String,
    substrate_kinetics: String,
    temperature: String,
    clean_mut_wt: String,
    kcat_mut: String,
    select_key: String,
    Km_mut: String,
    select_key_1: String,
    kcat_wt: String,
    Km_wt: String,
    dG_mut: String,
    dG_wt: String,
    ddG: String,
    ddG_gr: String,
    wt: String,
    mut: String,
    wt_aa: String,
    mut_aa: String,
    mut_aa_type: String,
    wt_aa_type: String
}, {
    collection:"kinetics_table"
});

//mongoose.model("hydrolases_kinetics",KineticsSchema);
mongoose.model("kinetics_table",KineticsTableSchema);
