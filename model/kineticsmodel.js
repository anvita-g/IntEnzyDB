const mongoose = require("mongoose");
const {watchOptions} = require("nodemon/lib/config/defaults");

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

var StructuresTableSchema = new mongoose.Schema({
    PDB_ID: String,
    Enzyme_Type: String,
    Name: String,
    Mutation: String,
    Global_Stoichiometry: String,
    Organism_Name: String,
    Organism_Taxid: String,
    Ec_Number: String,
    Strain: String,
    Gene: String,
    Resolution: String,
    Chain_Id: String,
    Fasta_Sequence: String,
    Partial_Modeled_Residue: String,
    Unmodeled_Residue: String,
    Active_Site: String,
    Entity_ID: String,
    Num_Seqres: String,
    Seqres: String

}, {
    collection:"structure_chain_level_table"
});

var ReferencesTableSchema = new mongoose.Schema({
    PDB_ID: String,
    uniprot: String,
    chainID: String,
    Active_Site: String,
    chain_n_res: String,
    Resolution: String,
    Resolution_n: String,
    reso_filter: String,
    pdb_chain: String,
    auth_as: String,
    ec_number: String,
    PDB_website: String,
    uniprot_webstie: String

}, {
    collection:"reference_table"
});

//mongoose.model("hydrolases_kinetics",KineticsSchema);
mongoose.model("kinetics_table",KineticsTableSchema);
mongoose.model("structure_chain_level_table",StructuresTableSchema);
mongoose.model("reference_table",ReferencesTableSchema);
