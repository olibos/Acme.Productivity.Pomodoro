// <copyright file="AuthenticatedUser.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Core
{
    using System.Runtime.Serialization;

    [DataContract]
    public class AuthenticatedUser
    {
        /// <summary>
        /// Gets or sets the Name.
        /// </summary>
        /// <value>The Name.</value>
        [DataMember(Name = "name")]
        public string Name { get; set; }
    }
}