import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import styles from "../styles/styles";

import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {

  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");
  const [email, setEmail] = useState(person?.email || "");

  async function save(){

    const data = { firstName, lastName, email };

    if(person){

      await updatePerson(person.id, data);

    }else{

      await createPerson(data);

    }

    navigation.goBack();
  }
}